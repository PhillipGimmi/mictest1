import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Audio } from 'expo-av';

const openSettings = () => {
  try {
    Linking.openSettings();
  } catch (error) {
    console.error("Couldn't open settings", error);
  }
};

const MicrophonePromptButton = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isDenied, setIsDenied] = useState(null);
  const [isBlocked, setIsBlocked] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Audio.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      setIsDenied(status === 'denied');
      setIsBlocked(status === 'blocked');
      console.log(`Microphone permission: ${status}`);
    })();
  }, []);

  const requestPermission = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    setHasPermission(status === 'granted');
    setIsDenied(status === 'denied');
    setIsBlocked(status === 'blocked');
    console.log(`Microphone permission: ${status}`);
  };

  if (hasPermission === null) {
    return <Text style={{textAlignVertical: "center",flex:1,textAlign: "center",}}>Requesting microphone permission</Text>;
  }

  const buttonColor = hasPermission ? 'green' : 'red';
  const buttonTitle = hasPermission ? 'Microphone Enabled' : 'Grant Microphone Permission';

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        style={{ backgroundColor: buttonColor, width: '89%' }}
        onPress={requestPermission}
      >
        <Text style={{textAlignVertical: "center",flex:1,textAlign: "center",}}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default  MicrophonePromptButton;