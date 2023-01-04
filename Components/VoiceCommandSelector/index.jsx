import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as Speech from 'expo-speech';

const VoiceCommandSelector = (props) => {
  const [isListening, setIsListening] = useState(false);
  const [command, setCommand] = useState(null);
  const [response, setResponse] = useState(null);

  const startListening = async () => {
    try {
      // Start the speech recognition process
      const result = await Speech.startAsync({
        onResult: (event) => {
          // Get the transcription of the recognized speech
          const transcription = event.value[0].transcription;
          console.log('Speech recognized:', transcription);
          setCommand(transcription);
          executeCommand(transcription);
        },
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const stopListening = async () => {
    try {
      await Speech.stopAsync();
    } catch (error) {
      console.error(error);
    }
  };

  const executeCommand = (command) => {
    console.log(`Executing command: ${command}`);
    switch (command) {
      case 'hello':
        setResponse('Hello! How are you today?');
        break;
      case 'goodbye':
        setResponse('Goodbye! Have a great day.');
        break;
      case 'what is your name':
        setResponse('My name is Assistant.');
        break;
      default:
        setResponse(`I'm sorry, I didn't understand the command: ${command}`);
        break;
    }
  };

  return (
    <View>
      {command && (
        <Text>
          Command: {command}
        </Text>
      )}
      {response && (
        <Text>
          Response: {response}
        </Text>
      )}
      {isListening ? (
        <Button
          title="Stop Listening"
          onPress={() => {
            setIsListening(false);
            stopListening();
          }}
        />
      ) : (
        <Button 
          title="Start Listening"
          onPress={() => {
            setIsListening(true);
            startListening();
          }}
        />
      )}
    </View>
  );
};

export default VoiceCommandSelector;