import React from 'react';
import { View, Button, Linking } from 'react-native';

const OpenApp = async () => {
  const canOpen = await Linking.canOpenURL('mictest://');
  if (canOpen) {
    Linking.openURL('mictest://');
  } else {
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