import { Platform, BackHandler } from 'react-native';

const CloseApp = () => {
  console.log('Closing app');
  if (Platform.OS === 'ios') {
    // For iOS devices
    console.log('This is an iOS device');
    Alert.alert('Cannot close this app', 'To close the app, please press the home button.', [{ text: 'OK' }]);
  } else {
    // For Android devices
    console.log('This is an Android device');
    BackHandler.exitApp();
  }
};
export default CloseApp