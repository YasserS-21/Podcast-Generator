const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const { Readable } = require('stream');

/**
 * Audio processing utilities using FFmpeg
 * - Converts uploaded audio to MP3 format
 * - Processes audio stream using buffer
 * - Returns path to processed file
 */

const processAudio = async (audioBuffer) => {
  try {

    // Create a readable stream from the buffer
    const inputStream = new Readable();
    inputStream.push(audioBuffer);
    inputStream.push(null);

    // Process with FFmpeg - convert to mp3 format
    await new Promise((resolve, reject) => {
      ffmpeg()
        .setFfmpegPath(ffmpegStatic)
        .input(inputStream)
        .toFormat('mp3')
        .on('end', () => {
          console.log('FFmpeg processing finished');
          resolve();
        })
        .on('error', (err) => {
          console.error('FFmpeg error:', err);
          reject(err);
        })
        .save('output.mp3');
    });

    return 'output.mp3'; // Return the path to the processed file
  } catch (error) {
    console.error('Error processing audio:', error);
    throw error;
  }
};

module.exports = {
  processAudio
};
