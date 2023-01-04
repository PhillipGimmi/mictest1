import React from 'react';
import { View, Button, Linking } from 'react-native';

const OpenApp = async () => {
  console.log('Opening app');
  const canOpen = await Linking.canOpenURL('mictest://');
  if (canOpen) {
    console.log('App is installed');
    Linking.openURL('mictest://');
  } else {
    console.log('App is not installed');
    // handle the case where the app is not installed
  }
  return (
    <View>
      <Button
        title="Open App"
        onPress={() => Linking.openURL('mictest://')}
      />
    </View>
  );
};

export default OpenApp;