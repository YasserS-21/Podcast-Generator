import PlayButton from '../PlayButton/PlayButton'
import ProgressBar from '../ProgressBar/ProgressBar'
import SpeedControl from '../SpeedControl/SpeedControl'
import { useState } from 'react'

export default function PodcastPlayer({podcastData}) {
  // Synth will be used to control the podcast
  const synth =  window.speechSynthesis; //all use same synth
  // progress bar will be used to display the progress of the podcast and will utter in file
  // speed control will be used to control the speed of the podcast using the synth.rate property
  // play will be used to stop and start the podcast using the synth.speaking property
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div>
      <ProgressBar podcastData={podcastData} synth={synth} />
      <SpeedControl synth={synth} />
      <PlayButton synth={synth} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  )
}
