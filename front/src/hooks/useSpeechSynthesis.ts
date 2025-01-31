import { useState, useEffect } from 'react';

export function useSpeechSynthesis() {
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const synth = window.speechSynthesis;

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance();
    setCurrentUtterance(utterance);

    return () => {
      synth.cancel();
    };
  }, [synth]);

  return { currentUtterance, synth };
} 