import React, { useState } from 'react'
import PlayButton from '../PlayButton/PlayButton'
import ProgressBar from '../ProgressBar/ProgressBar'
import SpeedControl from '../SpeedControl/SpeedControl'
import { useSpeechSynthesis } from '../../../hooks/useSpeechSynthesis'

export default function PodcastPlayer({podcastData}) {
  const { currentUtterance, synth } = useSpeechSynthesis();
  // progress bar will be used to display the progress of the podcast and will utter in file
  // speed control will be used to control the speed of the podcast using the synth.rate property
  // play will be used to stop and start the podcast using the synth.speaking property
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="podcast-player-container">
      {currentUtterance && <ProgressBar podcastData={podcastData} synth={synth} currentUtterance={currentUtterance} />}
      <div className="controls-container">
        {currentUtterance && <SpeedControl currentUtterance={currentUtterance} />}
        <PlayButton synth={synth} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      </div>
    </div>
  )
}
