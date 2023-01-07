import React, { useState } from 'react';
import { View, Text } from 'react-native';
import OpenApp from './commands/openApp';
import CloseApp from './commands/closeApp';

const CommandList = (props) => {
  const [command, setCommand] = useState(null);
  const [response, setResponse] = useState(null);

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
      case 'open app':
        OpenApp();
        break;
      case 'close app':
        CloseApp();
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
    </View>
  );
};

export default CommandList;