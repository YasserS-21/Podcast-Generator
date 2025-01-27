import React from 'react'
import { formatTimeStamp } from '../../../utils/formatTimeStamp'

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
  let formattedTime = formatTimeStamp(segment.timestamp, segment.duration)
  return (
    <div className="segment">
      <p><em>{formattedTime[0]} - {formattedTime[1]}</em> <strong>Speaker {segment.speaker}:</strong> {segment.text}</p>
      <br/>
    </div>
  )
}
