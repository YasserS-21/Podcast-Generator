import { useState } from 'react'
import PodcastGenerator from '../features/PodcastGenerator/components/PodcastGenerator'
import PodcastPlayer from '../features/podcast-playback/PodcastDisplay'

export default function PodcastApp() {
  const [podcastData, setPodcastData] = useState(null)
  return (
    <>
    <div className='podcast-app'>
        <PodcastGenerator setPodcastData={setPodcastData}/>
        {podcastData && <PodcastPlayer podcastData={podcastData}/>}
    </div>
    </>
  )
}
