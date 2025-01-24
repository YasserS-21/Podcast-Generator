const { GoogleGenerativeAI } = require('@google/generative-ai');
const {processAudio} = require("../utils/audioHelpers.js")
require('dotenv').config()
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateFromAudio = async (req, res) => {
  try {
    // 1. Check if received a file
    if (!req.file) {
      return res.status(400).json({ error: 'No audio file provided' });
    }
    console.log(req.file)
    // 2. Here I will process with FFmpeg 
    const outputPath = await processAudio(req.file.buffer);

    // 3. Define Gemini model 
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        generationConfig: {
          temperature: 0.5,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 5500,
        }
      });
    
    // 4 TODO! Generate Script
    
    // 5. TODO! Send the generated script back to frontend

    //Temporary Response
    return res.status(200).json({ 
        message: 'Audio processed successfully',
        outputPath 
      });

  } catch (error) {
    console.error('Error generating podcast:', error);
    res.status(500).json({ error: 'Failed to generate podcast' });
  }
};