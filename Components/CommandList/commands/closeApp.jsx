import React, { useState, useEffect } from 'react';
import { View, AppState } from 'react-native';
import Snowboy from 'react-native-snowboy';
import * as Speech from 'expo-speech';

const CloseApp = () => {
const [isListening, setIsListening] = useState(false);
const [appState, setAppState] = useState(AppState.currentState);

const startListening = () => {
setIsListening(true);
Speech.startAsync({
onResult: (event) => {
setIsListening(false);
if (event.value[0].transcript === 'close app') {
if (appState === 'active') {
AppState.addEventListener('change', handleAppStateChange);
AppState.changeAppState('background');
}
}
},
onError: (error) => {
console.error(error);
setIsListening(false);
},
});
};

const stopListening = () => {
Speech.stop();
setIsListening(false);
};

useEffect(() => {
Snowboy.start('close app', (error) => {
if (error) {
console.error(error);
} else {
console.log('Snowboy started listening for "close app"');
startListening();
}
});
return () => {
Snowboy.stop((error) => {
if (error) {
console.error(error);
} else {
console.log('Snowboy stopped listening');
}
});
stopListening();
};
}, []);

return <View />;
};

export default CloseApp;