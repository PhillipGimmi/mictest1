import { View, Text, Button, Platform } from 'react-native';
import { Audio } from 'expo-av';
import * as RNFS from 'react-native-fs';

const VoiceTranscription = (props) => {
  const [transcription, setTranscription] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  let recording = null;

  const startRecording = async () => {
    console.log('Recording started');
    setIsRecording(true);
    // Start recording audio
    recording = new Audio.Recording();
    try {
      await recording.startAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    console.log('Recording stopped');
    setIsRecording(false);
    // Stop recording audio and get the URI of the audio file
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log('Audio file URI:', uri);
      // Send the audio file to Google Cloud Speech-to-Text API to transcribe
      // Replace YOUR_API_KEY with your actual API key
      const response = await fetch(`https://speech.googleapis.com/v1/speech:recognize?key=YOUR_API_KEY`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          audio: {
            uri,
          },
          config: {
            encoding: 'LINEAR16',
            sampleRateHertz: 16000,
            languageCode: 'en-US',
          },
        }),
      });
      const data = await response.json();
      console.log('Transcription:', data);
      setTranscription(data.results[0].alternatives[0].transcript);
      // Delete the audio file
      if (Platform.OS === 'ios') {
        const file = {

uri };
const options = { type: 'audio/x-m4a' };
await RNFS.unlink(file.uri);
} else {
await RNFS.unlink(uri);
}
} catch (error) {
console.error(error);
}
};

return (
<View>
{transcription && (
<Text>Transcription: {transcription}</Text>
)}
{isRecording ? (
<Button
title="Stop recording"
onPress={() => stopRecording()}
/>
) : (
<Button
title="Start recording"
onPress={() => startRecording()}
/>
)}
</View>
);
};

export default VoiceTranscription;




