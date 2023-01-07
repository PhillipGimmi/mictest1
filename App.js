import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MicPermissionPrompt from './Components/MicPermissionPrompt';
import VoicePermissionPrompt from './Components/VoicePermissionPrompt';


const App = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [result, setResult] = useState(null);

  console.log('App component is rendered');

  return (
    <View>
      <MicPermissionPrompt
        onPermissionGranted={() => {
          console.log('Permission granted');
          setPermissionGranted(true);
        }}
        onResult={(result) => {
          console.log(`Result: ${result}`);
          setResult(result);
        }}
      >
        {permissionGranted ? <VoicePermissionPrompt /> : null}
      </MicPermissionPrompt>
      {permissionGranted && (
        <Text>Permission granted</Text>
      )}
      {result && (
        <Text>Result: {result}</Text>
      )}
    </View>
  );
};

export default App;

