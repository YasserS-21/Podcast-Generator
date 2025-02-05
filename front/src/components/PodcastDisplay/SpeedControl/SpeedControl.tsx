import React, { useState, useEffect } from 'react';

export default function SpeedControl({ currentUtterance}) {
  const [speed, setLocalSpeed] = useState(1);

  const handleSpeedChange = (event) => {
    const newSpeed = parseFloat(event.target.value);
    setLocalSpeed(newSpeed);
  };

  // Update the current utterance's rate whenever the speed changes
  useEffect(() => {
    if (currentUtterance) {
      currentUtterance.rate = speed;
    }
  }, [currentUtterance, speed]);

  return (
    <div className="speed-controls">
      <label htmlFor="speedControl">Speed Control: {speed}x</label>
      <input
        id="speedControl"
        type="range"
        min="0.5"
        max="2"
        step="0.1"
        value={speed}
        onChange={handleSpeedChange}
      />
    </div>
  );
}
