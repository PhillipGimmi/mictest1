import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking, Alert, Platform } from 'react-native';
import * as Permissions from 'expo-permissions';

const requestMicrophonePermission = async () => {
let permission;
if (Platform.OS === 'ios') {
const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
permission = status;
} else {
try {
const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
permission = status;
} catch (err) {
console.warn(err);
permission = 'denied';
}
}
return permission;
};

const openSettings = () => {
try {
Linking.openSettings();
} catch (error) {
console.error("Couldn't open settings", error);
}
};

const MicrophonePrompt = () => {
const [isDenied, setIsDenied] = useState(null);
const [isBlocked, setIsBlocked] = useState(null);
const [hasPermission, setHasPermission] = useState(null);

useEffect(() => {
  const requestPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    setHasPermission(status === 'granted');
    setIsDenied(status === 'denied');
    setIsBlocked(status === 'blocked');
  };
  requestPermission();
}, []);

if (hasPermission === null) {
return <Text style={{ textAlignVertical: "center", flex: 1, textAlign: "center" }}>Requesting microphone permission</Text>;
}
if (hasPermission === false && isBlocked === true) {
return (
<View style={{ backgroundColor: 'red' }}>
<Text>
You have blocked the microphone permission. Please go to your device's settings and allow
the app to access the microphone in order to use this app.
</Text>
<TouchableOpacity onPress={openSettings}>
<Text style={{ textAlignVertical: "center", flex: 1, textAlign: "center" }}>Open settings</Text>
</TouchableOpacity>
</View>
);
}
  if (hasPermission === false && isDenied === true) {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Text>
          You have denied the microphone permission.
        </Text>
        <TouchableOpacity onPress={requestMicrophonePermission}>
          <Text style={{ textAlignVertical: "center", flex: 1, textAlign: "center" }}>Request microphone permission</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={requestMicrophonePermission} style={{ backgroundColor: 'green' }}>
        <Text style={{ textAlignVertical: "center", flex: 1, textAlign: "center" }}>Grant microphone permission</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MicrophonePrompt;