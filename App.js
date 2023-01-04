import React from 'react';
import { Text, View } from 'react-native';
import MicrophonePrompt from './Components/MicrophonePrompt';
import VoiceCommandSelector from './Components/VoiceCommandSelector';


const App = () => {
  console.log('App component is rendered');
  return (
    <View>
            <Text style={{flexDirection: 'row', height: 30, flexWrap: 'wrap', backgroundColor: 'green', alignSelf: 'center'}}>Hello world</Text>
      <MicrophonePrompt>
        <VoiceCommandSelector />

      </MicrophonePrompt>
    </View>
  );
};

export default App;