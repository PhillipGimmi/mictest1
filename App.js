import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MicPermissionPrompt from './Components/PermissionPrompt';
import VoicePermissionPrompt from './Components/VoicePermissionPrompt';
import VoiceTranscription from './Components/VoiceTranscription';

const App = () => {
const [permissionGranted, setPermissionGranted] = useState(false);
const [transcription, setTranscription] = useState(null);

console.log('App component is rendered');

return (
<View>
  <MicPermissionPrompt>
<VoicePermissionPrompt
onPermissionGranted={() => {
console.log('Permission granted');
setPermissionGranted(true);
}}
>
{permissionGranted ? (
<>
<VoiceTranscription
onRecording={() => {
console.log('Recording started');
}}
onStopped={(uri) => {
console.log('Recording stopped');
setTranscription(uri);
}}
/>
<VoiceTranscription transcription={transcription} />

</>
) : null}
</VoicePermissionPrompt>
</MicPermissionPrompt>
{permissionGranted && (
<Text>Permission granted</Text>
)}
</View>
);
};

export default App;