/*eslint-disable*/

/**
 * Component for handling audio file uploads
 * Props:
 * - setAudioFile: Function to update parent's audioFile state
 * Accepts audio/* file types
 */

export default function AudioUploadButton({setAudioFile}) {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

    return (
        <>
          <div className="audio-upload-button">
            <input type="file" accept="audio/*" onChange={handleFileChange} />
          </div>
        </>
      )
    }