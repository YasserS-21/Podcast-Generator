import { generatePodcast } from '../../../../utils/generatePodcast';

interface GeneratePodcastButtonProps {
  audioFile: File | null;
  userTextInput: string;
  inputType: string;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setPodcastData: (data: object | null) => void
}

/**
 * Button component to trigger podcast generation
 * Props:
 * - audioFile: File object of uploaded audio
 * - userTextInput: String of user's text input
 * - inputType: Current input mode ('text' or 'audio')
 * - isLoading: Boolean indicating if the button is in a loading state
 * - setIsLoading: Function to set the loading state
 * - setPodcastData: Function to set the generated podcast data
 * 
 * Handles API calls to backend endpoints based on input type
 */
export default function GeneratePodcastButton({ 
  audioFile, 
  userTextInput, 
  inputType,
  isLoading,
  setIsLoading,
  setPodcastData
}: GeneratePodcastButtonProps) {
  const handleGenerate = async () => {
    setIsLoading(true);
    setPodcastData(null); // Reset previous data
    try {
      const data = await generatePodcast({ inputType, audioFile, userTextInput });
      setPodcastData(data);
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleGenerate}
      disabled={
        isLoading || 
        !((inputType === 'audio' && audioFile) || (inputType === 'text' && userTextInput))
      }
    >
      {isLoading ? 'Generating...' : 'Generate Podcast'}
    </button>
  );
}
