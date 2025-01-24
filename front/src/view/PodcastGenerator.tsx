import { useState } from 'react'
import AudioUploadButton from '../components/AudioUploadButton.js';
import GeneratePodcastButton from '../components/GeneratePodcastButton.js';
import InputToggler from '../components/InputToggler.js';
import UserTextArea from '../components/UserTextArea.js';

export default function PodcastGenerator() {
  const [audioFile, setAudioFile] = useState(null);
  const [inputType, setInputType] = useState('text'); // 'text' or 'audio'
  const [userTextInput, setUserTextInput] = useState('')

  return (
    <>
    <h1>PodcastGenerator</h1>
    <div className="podcast-generator">
      <div className="input-toggle">
        <InputToggler inputType={inputType} setInputType={setInputType}/>
      </div>
      <div className="input-area">
      {inputType === 'text' ? (
          <UserTextArea userTextInput={userTextInput} setUserTextInput={setUserTextInput}/>
        ) : (
          <AudioUploadButton setAudioFile={setAudioFile} />
        )}
      </div>
    <GeneratePodcastButton audioFile={audioFile} userTextInput={userTextInput} inputType={inputType}/>
    </div>
    </>
  )
}
