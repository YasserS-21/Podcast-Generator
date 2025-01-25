import UserTextArea from '../UserTextArea'
import AudioUploadButton from '../AudioUploadButton'

interface InputAreaProps {
  inputType: string;
  userTextInput: string;
  setUserTextInput: (text: string) => void;
  setAudioFile: (file: File | null) => void;
}

export default function InputArea({ 
  inputType, 
  userTextInput, 
  setUserTextInput, 
  setAudioFile 
}: InputAreaProps) {
  return (
    <div className="input-area">
      {inputType === 'text' ? (
        <UserTextArea 
          userTextInput={userTextInput} 
          setUserTextInput={setUserTextInput}
        />
      ) : (
        <AudioUploadButton 
          setAudioFile={setAudioFile} 
        />
      )}
    </div>
  )
}
