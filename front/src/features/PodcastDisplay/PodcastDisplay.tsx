import PodcastPlayer from "./components/PodcastPlayer/PodcastPlayer"
import ScriptDisplay from "./components/ScriptDisplay/ScriptDisplay"

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
