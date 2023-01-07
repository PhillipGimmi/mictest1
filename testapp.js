{/* This is a functional component in React called App that is a view component containing other smaller components. It has three main parts:

1)import statements at the top which import various modules and libraries needed for the component to function.
2) A component definition using the const keyword which is a function that returns JSX, a syntax extension for JavaScript that allows for the inclusion of HTML-like elements in code.
3) export default App which allows the component to be used in other parts of the application.
Inside the component, there are two useState hook functions being used to manage component state. The useState hook allows a functional component to have state by returning an array 
with two elements: the current state value and a function to update it. The permissionGranted state variable is a boolean that represents whether the user has granted microphone 
permission, and the result state variable is the current result of the microphone input.

There are also three JSX elements being returned: a Text element, a MicrophonePrompt component, and a VoiceCommandSelector component. The Text element displays "Hello world" with 
some styling applied, and the MicrophonePrompt and VoiceCommandSelector components are passed some props, or properties, that control their behavior. Finally, there are two Text 
elements that are conditionally rendered based on the values of the permissionGranted and result state variables. If permissionGranted is true, the first Text element will be 
displayed with the message "Permission granted". If result has a value, the second Text element will be displayed with the message "Result: {result}".*/}


import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MicrophonePrompt from './Components/MicrophonePrompt';
import VoiceCommandSelector from './Components/VoiceCommandSelector';

const App = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [result, setResult] = useState(null);

  console.log('App component is rendered');
  return (
    <View>
      <Text style={{ flexDirection: 'row', height: 30, flexWrap: 'wrap', backgroundColor: 'green', alignSelf: 'center' }}>
        Hello world
      </Text>
      <MicrophonePrompt
        onPermissionGranted={() => setPermissionGranted(true)}
        onResult={(result) => setResult(result)}
      >
        <VoiceCommandSelector />
      </MicrophonePrompt>
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