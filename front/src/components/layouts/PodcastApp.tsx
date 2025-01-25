import { useState } from 'react'
import PodcastGenerator from '../pages/PodcastGenerator'
import PodcastPlayer from '../pages/PodcastDisplay'

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
