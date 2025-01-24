

export default function InputToggler({setInputType, inputType}) {
  return (
    <>
      <button 
        onClick={() => setInputType('text')}
        className={inputType === 'text' ? 'input-active' : ''}
      >
        Text Input
      </button>
      <button 
        onClick={() => setInputType('audio')}
        className={inputType === 'audio' ? 'input-active' : ''}
      >
        Audio Upload
      </button>
    </>
  )
}
