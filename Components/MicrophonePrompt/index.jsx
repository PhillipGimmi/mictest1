import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking, Alert } from 'react-native';
import { Platform } from 'react-native';
import Permissions from 'react-native-permissions';
import PermissionsAndroid from 'react-native-permissions';

const requestMicrophonePermission = async () => {
  let permission;
  if (Platform.OS === 'ios') {
    const { status } = await Permissions.request('microphone');
    permission = status;
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'App needs access to your microphone to record audio.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        permission = 'granted';
      } else {
        permission = 'denied';
      }
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
    (async () => {
      const status = await requestMicrophonePermission();
      setHasPermission(status === 'granted');
      setIsDenied(status === 'denied');
      setIsBlocked(status === 'blocked');
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = Permissions.addListener(({ type, status }) => {
    if (type === 'microphone') {
    setHasPermission(status === 'granted');
    setIsDenied(status === 'denied');
    setIsBlocked(status === 'blocked');
    }
    });
    return unsubscribe;
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
  return (
  <View style={{ flex: 1 }}>
    <TouchableOpacity onPress={requestMicrophonePermission} style={{ backgroundColor: 'green' }}>
      <Text style={{ textAlignVertical: "center", flex: 1, textAlign: "center" }}>
        Toggle microphone permission
      </Text>
    </TouchableOpacity>
  </View>
  );
}

export default MicrophonePrompt;