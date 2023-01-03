import React from 'react';
import { View } from 'react-native';
import MicrophonePrompt from './Components/MicrophonePrompt';
import VoiceCommandSelector from './Components/VoiceCommandSelector';


const App = () => {
  return (
    <View>
      <MicrophonePrompt>
        <VoiceCommandSelector />
      </MicrophonePrompt>
    </View>
  );
};

export default App;