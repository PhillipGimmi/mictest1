import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as Speech from 'expo-speech';

const CommandList = () => {
  const [command, setCommand] = useState(null);
  const [response, setResponse] = useState(null);

  const startListening = () => {
    // Start the speech recognition process
    Speech.startAsync({
      onResult: (result) => {
        // Get the transcription of the recognized speech
        const transcription = result.value[0].transcription;
        console.log('Speech recognized:', transcription);
        setCommand(transcription);
        executeCommand(transcription);
      },
    });
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
      <Button
        title="Start Listening"
        onPress={() => startListening()}
      />
    </View>
  );
};

export default CommandList;