const express = require('express');
const router = express.Router();
const multer = require('multer');
const podcastController = require('../controllers/podcastController');

// Configure multer to use memory storage (more convinent for this project )
const upload = multer({ storage: multer.memoryStorage() });

// Route for audio-based generation
// Podcast route - file will be in req.file.buffer instead of on disk
router.post('/generate-podcast', upload.single('audio'), podcastController.generateFromAudio);

// Route for text-based generation 
// router.post('/generate-from-text', podcastController.generateFromText);

module.exports = router;
