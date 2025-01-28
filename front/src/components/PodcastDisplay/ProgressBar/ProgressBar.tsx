import React from 'react';
import { playSegments } from '../../../utils/playSegments';
import './ProgressBar.css'; // Import the CSS file for styling

export default function ProgressBar({ podcastData, synth }) {
  const [progress, setProgress] = React.useState(0);
  const segments = podcastData.podcast.segments;

  React.useEffect(() => {
    playSegments(segments, synth, setProgress);
  }, [segments, synth]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress * 100}%` }}
      ></div>
      {segments.map((_, index) => (
        <div
          key={index}
          className="segment-marker"
          style={{ left: `${((index + 1) / segments.length) * 100}%` }}
        ></div>
      ))}
    </div>
  );
}
