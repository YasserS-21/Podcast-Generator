import { useState } from 'react'
import AudioUploadButton from '../components/AudioUploadButton.js';
import GeneratePodcastButton from '../components/GeneratePodcastButton.js';

export default function PodcastGenerator() {
  const [audioFile, setAudioFile] = useState(null);
  return (
    <>
    <h1>PodcastGenerator</h1>
    <div className="podcast-generator">
    <AudioUploadButton setAudioFile={setAudioFile} />
    <GeneratePodcastButton audioFile={audioFile} />
    </div>
    </>
  )
}
