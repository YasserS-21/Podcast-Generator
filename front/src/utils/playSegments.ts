export function playSegments(segments, synth, updateProgress) {
    let currentSegmentIndex = 0;
  
    function playNextSegment() {
      if (currentSegmentIndex < segments.length) {
        const utterance = new SpeechSynthesisUtterance(segments[currentSegmentIndex].text);
  
        utterance.onend = () => {
          currentSegmentIndex++;
          updateProgress(currentSegmentIndex / segments.length); // Update progress after each segment
          playNextSegment(); // Move to the next segment
        };
  
        utterance.onerror = (event) => {
          console.error('Speech error', event);
        };
  
        synth.speak(utterance);
      }
    }
  
    playNextSegment();
  }
