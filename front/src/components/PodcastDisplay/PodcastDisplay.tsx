import PodcastPlayer from "./PodcastPlayer/PodcastPlayer"
import ScriptDisplay from "./ScriptDisplay/ScriptDisplay"

export default function PodcastDisplay({podcastData}) {
    
  return (
    <div className='podcast-display'>
      <div className='podcast-player-container'>
        <PodcastPlayer podcastData={podcastData}/>
      </div>
      <div className='script-display-container'>
        <ScriptDisplay podcastData={podcastData} />
      </div>
    </div>
  )
}
