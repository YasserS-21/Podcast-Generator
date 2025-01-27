import ScriptSegment from '../ScriptSegment/ScriptSegment'

/**
 * ScriptDisplay component
 * 
 * This component is responsible for displaying the script of the podcast.
 * It receives podcastData as a prop and maps over the segments to render each one.
 * 
 * @param {Object} props - The component props
 * @param {Object} props.podcastData - The data related to the podcast, including script segments
 */
export default function ScriptDisplay({ podcastData }) {
  return (
    <>
    <div className="script">
      {podcastData.podcast.segments.map((segment) => {
        return <ScriptSegment segment={segment}/>
      })}

    </div>
    </>
  )
}
