import React, { useState } from 'react';
import { Speech } from 'expo-speech';

const VoiceControl = () => {
  const [speech, setSpeech] = useState(null);

  const startRecognition = async () => {
    console.log('Recognition started');
    try {
      const result = await Speech.startAsync({
        onResult: (e) => {
          console.log(e.value);
          setSpeech(e.value);
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecognition = async () => {
    console.log('Recognition stopped');
    try {
      await Speech.stopAsync();
    } catch (error) {
      console.error(error);
    }
  };

  // You can call startRecognition() and stopRecognition() wherever you want in your component
  // For example, you can call them in componentDidMount() or in a custom hook
  useEffect(() => {
    startRecognition();
  }, []); // This will start recognition when the component mounts

  return (
    <View>
      {speech && <Text>Recognized speech: {speech}</Text>}
    </View>
  );
};

export default VoiceControl;