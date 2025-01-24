/*eslint-disable*/

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