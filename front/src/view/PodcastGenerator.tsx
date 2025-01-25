import { useState } from 'react'
import GeneratePodcastButton from '../components/GeneratePodcastButton.js';
import InputToggler from '../components/InputToggler.js';
import InputArea from "../components/InputArea.js"
import Spinner from '../components/Spinner/Spinner.js';

/**
 * Main container component for the podcast generation interface
 * Manages state for:
 * - audioFile: Uploaded audio file
 * - inputType: Toggle between 'text' and 'audio' input modes
 * - userTextInput: Text input from user
 */
export default function PodcastGenerator() {
  const [audioFile, setAudioFile] = useState(null);
  const [inputType, setInputType] = useState('text'); // 'text' or 'audio'
  const [userTextInput, setUserTextInput] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [podcastData, setPodcastData] = useState(null)

  return (
    <>
    <h1>PodcastGenerator</h1>
    <div className="podcast-generator">
      <InputToggler inputType={inputType} setInputType={setInputType}/>
      <InputArea
          inputType={inputType}
          userTextInput={userTextInput}
          setUserTextInput={setUserTextInput}
          setAudioFile={setAudioFile}
      />
      <GeneratePodcastButton 
        audioFile={audioFile} 
        userTextInput={userTextInput} 
        inputType={inputType}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setPodcastData={setPodcastData}
      />
    </div>
    {isLoading && <Spinner message="Generating podcast..." />}
    {/**TODO! create podcast display component and pass in podcastData  */}
    {podcastData && <>This is the podcast</>}
    </>
  )
}
