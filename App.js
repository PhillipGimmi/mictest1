import React, { useEffect } from 'react';
import MicrophonePromptButton from './Components/GrantPermissionButton';
import MicrophonePrompt from './Components/GrantPermissionButton';
import MicrophonePermissionChecker from './Components/MicrophonePrompt';
import VoiceCommandSelector from './Components/VoiceCommandSelector';


const App = () => {
  useEffect(() => {
    // Perform any necessary side effects here
  }, []); // empty array means the effect only runs on mount

  return (
    <>
    <MicrophonePrompt/>
    <MicrophonePermissionChecker>
      <VoiceCommandSelector />
      < MicrophonePromptButton/>
    </MicrophonePermissionChecker>
  </>);
};

export default App;