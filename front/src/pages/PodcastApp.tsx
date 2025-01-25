import { useState } from 'react'
import PodcastGenerator from '../components/PodcastGenerator/PodcastGenerator'
import PodcastDisplay from '../components/PodcastDisplay/PodcastDisplay'

export default function PodcastApp() {
  const [podcastData, setPodcastData] = useState(null)
  return (
    <>
    <div className='podcast-app'>
        <PodcastGenerator setPodcastData={setPodcastData}/>
        {podcastData && <PodcastDisplay podcastData={podcastData}/>}
    </div>
    </>
  )
}
