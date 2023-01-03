import { Platform, BackHandler } from 'react-native';

const CloseApp = () => {
  if (Platform.OS === 'ios') {
    // For iOS devices
    Alert.alert('Cannot close this app', 'To close the app, please press the home button.', [{ text: 'OK' }]);
  } else {
    // For Android devices
    BackHandler.exitApp();
  }
};
export default CloseApp
