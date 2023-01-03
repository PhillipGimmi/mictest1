import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import {
  start as startRecognizing,
  stop as stopRecognizing,
  onSpeechRecognized,
} from 'react-native-voice';
import CommandList from '../CommandList';
import MicrophonePermissionChecker from '../MicrophonePrompt';

const VoiceCommandSelector = () => {
  const [isListening, setIsListening] = useState(true);

  const startListening = () => {
    onSpeechRecognized((result) => {
      setIsListening(false);
      CommandList.startListening(result);
    });
    startRecognizing();
    setIsListening(true);
  };

  const stopListening = () => {
    stopRecognizing();
    setIsListening(false);
  };

  return (
    <MicrophonePermissionChecker
      onPermissionGranted={() => startListening()}
    >
      {isListening ? (
        <Button
          title="Stop Listening"
          onPress={stopListening}
        />
      ) : (
        <Button
          title="Start Listening"
          onPress={startListening}
        />
      )}
    </MicrophonePermissionChecker>
  );
};

export default VoiceCommandSelector;