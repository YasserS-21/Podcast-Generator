import { useState } from 'react'
import GeneratePodcastButton from './GeneratePodcastButton/GeneratePodcastButton.js';
import InputToggler from './InputToggler/InputToggler.js';
import InputArea from "./InputArea/InputArea.js"
import Spinner from '../common/Spinner/Spinner.js';
import headerImage from "../../assets/header.png"
import helpImage from '../../assets/help.png'; 

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
    <h1>
      <div className="centered-image">
        <img src={headerImage} alt="Header" style={{ width: '300px', height: 'auto' }} />
      </div>

    </h1>
    <div className="podcast-generator">
      <div className="input-toggler-container">
        <InputToggler inputType={inputType} setInputType={setInputType}/>
      </div>
      <div className="input-area-container">
        <InputArea
            inputType={inputType}
            userTextInput={userTextInput}
            setUserTextInput={setUserTextInput}
            setAudioFile={setAudioFile}
        />
      </div>
      <div className="generate-button-container">
        <GeneratePodcastButton 
          audioFile={audioFile} 
          userTextInput={userTextInput} 
          inputType={inputType}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setPodcastData={setPodcastData}
        />
        <img src={helpImage} alt="Help" style={{ width: '30px', height: 'auto', marginLeft: '10px' }} />
      </div>
    </div>
    {isLoading && <Spinner message="Generating podcast..." />}
    </>
  )
}
