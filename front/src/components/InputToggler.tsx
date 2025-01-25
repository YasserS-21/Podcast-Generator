/**
 * Toggle component to switch between text and audio input modes
 * Props:
 * - setInputType: Function to update input type
 * - inputType: Current input type state
 */

export default function InputToggler({setInputType, inputType}) {
  return (
    <>
    <div className="input-toggle">
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
    </div>
    </>
  )
}
