import React from 'react'
/**
 * ScriptSegment component
 * 
 * This component is responsible for rendering a single segment of the podcast script.
 * It formats the timestamp and duration using the formatTimeStamp utility.
 * 
 * @param {Object} props - The component props
 * @param {Object} props.segment - The segment data, including speaker, text, timestamp, and duration
 */
export default function ScriptSegment({ segment }) {
  return (
    <div className="segment">
      <p><strong>Speaker {segment.speaker}:</strong> {segment.text}</p>
      <br/>
    </div>
  )
}
