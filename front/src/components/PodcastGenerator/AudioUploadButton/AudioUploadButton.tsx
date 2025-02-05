/*eslint-disable*/
import AudioFileDisplay from '../AudioFileDisplay/AudioFileDisplay';

/**
 * Component for handling audio file uploads
 * Props:
 * - setAudioFile: Function to update parent's audioFile state
 * - audioFile: The currently uploaded audio file
 * Accepts audio/* file types
 */

export default function AudioUploadButton({setAudioFile, audioFile}) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

  return (
    <div className="audio-upload-button">
      <input 
        type="file" 
        accept="audio/*" 
        id="audio-upload" 
        onChange={handleFileChange} 
        style={{ display: 'none' }}
      />
      <label htmlFor="audio-upload">{audioFile ? "Select another audio" : "Upload Audio"}</label>
      {audioFile && <AudioFileDisplay audioFile={audioFile}/>}
    </div>
  );
}