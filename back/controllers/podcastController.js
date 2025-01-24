const { GoogleGenerativeAI } = require('@google/generative-ai');
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

    // 3. Send to Gemini and get response
   // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    

    // 4. Send the response back to frontend
    return res.status(200).json({ message: 'File received successfully'});

  } catch (error) {
    console.error('Error generating podcast:', error);
    res.status(500).json({ error: 'Failed to generate podcast' });
  }
};

