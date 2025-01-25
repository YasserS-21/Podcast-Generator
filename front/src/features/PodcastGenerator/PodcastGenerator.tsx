import { useState } from 'react'
import GeneratePodcastButton from '../../features/generator/components/GeneratePodcastButton/GeneratePodcastButton.js';
import InputToggler from '../input/InputToggler/InputToggler.js';
import InputArea from "../../features/generator/components/InputArea/InputArea.js"
import Spinner from '../common/Spinner/Spinner.js';
import PodcastPlayer from './PodcastDisplay.js';

/**
 * Main container component for the podcast generation interface
 * Manages state for:
 * - audioFile: Uploaded audio file
 * - inputType: Toggle between 'text' and 'audio' input modes
 * - userTextInput: Text input from user
 */
export default function PodcastGenerator({setPodcastData}) {
  const [audioFile, setAudioFile] = useState(null);
  const [inputType, setInputType] = useState('text'); // 'text' or 'audio'
  const [userTextInput, setUserTextInput] = useState('')
  const [isLoading, setIsLoading] = useState(false);

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
    </>
  )
}
