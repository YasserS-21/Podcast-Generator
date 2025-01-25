import PodcastPlayer from "./PodcastPlayer/PodcastPlayer"
import ScriptDisplay from "./ScriptDisplay/ScriptDisplay"

export default function PodcastDisplay({podcastData}) {
    
  return (
    <>
    <div className='podcast-display'>PodcastDisplay
        <PodcastPlayer/>
        <ScriptDisplay/>
    </div>
    </>
  )
}
