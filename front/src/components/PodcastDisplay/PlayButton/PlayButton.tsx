import React, { useState } from 'react';

/**
 * PlayButton component
 * 
 * This component is responsible for controlling the playback of the podcast using the Web Speech API.
 * It toggles between play and pause states based on the synth's speaking status.
 * 
 * @param {Object} props - The component props
 * @param {SpeechSynthesis} props.synth - The speech synthesis instance used to control playback
 */
export default function PlayButton({ synth, isPlaying, setIsPlaying}) {


  const togglePlayPause = () => {
    if (isPlaying) {
      synth.pause(); // Stop the speech synthesis
      console.log("pausing")
      setIsPlaying(false);
    } else {
      // Assuming you have a function to start the speech synthesis
      console.log("resuming")
      synth.resume()
      setIsPlaying(true);
    }
  };



  return (
    <button onClick={togglePlayPause}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
}
