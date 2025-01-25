const { GoogleGenerativeAI } = require('@google/generative-ai');
const {processAudio} = require("../utils/audioHelpers.js")
const fs = require('fs').promises;
require('dotenv').config()
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Handles podcast generation logic from audio
 * - Processes audio file uploads
 * - Configures Gemini AI model
 * - Generates podcast scripts
 * 
 * Environment Requirements:
 * - GEMINI_API_KEY in .env file
 */

exports.generateFromAudio = async (req, res) => {
  try {
    // Check if received a file
    if (!req.file) {
      return res.status(400).json({ error: 'No audio file provided' });
    }
    // Here I will process with FFmpeg 
    const outputPath = await processAudio(req.file.buffer);

    // Read the processed file
    const audioData = await fs.readFile(outputPath);

    // Define Gemini model 
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          temperature: 0.5,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 5500,
        }
      });
    
    // JSON Object Template 
    let jsonObjectTemplate = `{
                    "segments": [
                        {
                        "speaker": "1",
                        "text": "Dialogue explaining technical concept",
                        "timestamp": 0,
                        duration": 5.5
                        }, 
                        {
                        "speaker": "2",
                        "text": "Clarifying questions or responses",
                        "timestamp": 5.5,
                        "duration": 3.2
                        }
                        ],
                    "metadata": {
                        "topic": "Specific Technical Topic",
                        "totalDuration": 8.7
                        }    
                    }`
    // Generate script
    // passes in audio data inline and refers to mimeType which we converted to mp3 @line 25
    // returns full podcast script in JSON Object notation
    const script = await model.generateContent([
        {
            inlineData:{
                mimeType: "audio/mp3",
                data: audioData.toString("base64")
            }
        }, 
        {
            text: 
            `
            You are an AI podcast script generator. Given an audio file discussing a technical or educational topic, generate a conversational script between two speakers that:
                - Breaks down complex ideas into digestible explanations
                - Mimics natural dialogue with questions and explanations
                - Maintains an engaging, educational tone
                - Accurately represents the core content of the audio  
            Output requirements:
                - Conversational, but informative dialogue
                - Reflect the technical depth of the original audio
                - Include key points, analogies, and explanatory examples
                - Maintain a realistic back-and-forth conversation style
                - Include metadata about topic and conversation flow
                - Add estimated timestamps and segment durations
                
                Example Template
                    ${jsonObjectTemplate}  
   
            Processing steps:
                1. Carefully listen to the entire audio
                2. Identify the primary topic and key concepts
                3. Create a dialogue that progressively explains the subject
                4. Use one speaker as the primary explainer, the other as an inquisitive learner
                5. Include clarifying questions and explanatory responses
                
            `
        }
    ])
    // Cannot Remove json tags from gemini output so manaully remove 
    let responseText = script.response.text().replace(/```json\n?/, '').replace(/```\n?/, '');

    // Parse response into javascript 
    const cleanJson = JSON.parse(responseText)

    // Send the generated script back to frontend
    return res.status(200).json({ 
        podcast: cleanJson
      });

  } catch (error) {
    console.error('Error generating podcast:', error);
    res.status(500).json({ error: 'Failed to generate podcast' });
  }
};