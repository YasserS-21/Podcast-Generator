interface GeneratePodcastParams {
  inputType: string;
  audioFile: File | null;
  userTextInput: string;
}

export async function generatePodcast({ inputType, audioFile, userTextInput }: GeneratePodcastParams) {
  const API_URL = import.meta.env.VITE_API_URL;
  let response = null;

  if (inputType === 'audio' && audioFile) {
    const formData = new FormData();
    formData.append('audio', audioFile);
    
    response = await fetch(`${API_URL}/api/generate-podcast`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) throw new Error('Failed to generate podcast from audio');
    
  } else if (inputType === 'text' && userTextInput) {
    response = await fetch(`${API_URL}/api/generate-from-transcript`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ transcript: userTextInput }),
    });
    
    if (!response.ok) throw new Error('Failed to generate podcast from text');
  }

  const data = await response?.json();
  return data;
} 