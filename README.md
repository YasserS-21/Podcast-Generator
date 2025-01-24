# Podcast-Generator

Overview
Podcast Generator is an AI-powered tool for creating high-quality podcast content automatically. It leverages advanced language models to generate engaging audio narratives across various topics and styles.

Features

- AI-driven content generation
- Support for both text and audio input
- Automated script writing
- Audio processing
- Text-to-speech audio rendering

## Prerequisites

- Node.js (Latest LTS version recommended)

Frontend Dependencies:

- react & react-dom: UI framework
- typescript: Type safety
- vite: Build tool and development server

Backend Dependencies:

- @google/generative-ai: AI content generation
- express: Web framework
- cors: Cross-origin resource sharing
- dotenv: Environment variable management
- fluent-ffmpeg: Audio processing

## Environment Variables

Create a `.env` file in the backend directory:
`GEMINI_API_KEY=your_api_key_here`

##Instructions
To use Podcast Generator, follow these steps:

1. Clone the repository: git clone https://github.com/YasserS-21/podcast-generator.git

2. Install depenencies for both front and backend.
   `cd podcast-generator/front && npm install`

   ```cd ../back && npm install

   ```

3. Start the development servers:

- Backend: `npm run start` (runs on port 3000)
- Frontend: `npm run dev` (runs on port 5173)

## Usage

1. Choose between text input or audio upload
2. For text: Enter your content in the text field
3. For audio: Upload an audio file.
4. Click "Generate Podcast" to process
5. Wait for the AI to generate your podcast content

## Technical Notes

- Audio files are automatically compressed and optimized using FFmpeg
- Compression settings:
  - Sample Rate: 16kHz
  - Bit Rate: 96k
  - Mono channel
  - MP3 format (libmp3lame codec)
