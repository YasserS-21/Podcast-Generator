export function playSegments(segments, synth, updateProgress, currentUtterance) {
    let currentSegmentIndex = 0;
  
    function playNextSegment() {
        console.log(currentUtterance)
      if (currentSegmentIndex < segments.length) {
        currentUtterance.text = segments[currentSegmentIndex].text 
        currentUtterance.onend = () => {
          currentSegmentIndex++;
          updateProgress(currentSegmentIndex / segments.length); // Update progress after each segment
          playNextSegment(); // Move to the next segment
        };
  
        currentUtterance.onerror = (event) => {
          console.error('Speech error', event);
        };
  
        synth.speak(currentUtterance);
      }
    }
  
    playNextSegment();
  }
