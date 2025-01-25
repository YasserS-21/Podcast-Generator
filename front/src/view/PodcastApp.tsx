import { useState } from 'react'
import PodcastGenerator from './PodcastGenerator'
import PodcastPlayer from '../components/PodcastPlayer'

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
