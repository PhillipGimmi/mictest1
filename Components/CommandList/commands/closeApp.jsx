{/* This is a function called CloseApp that is used to close an app on a device. It has one main part:

1) import statements at the top which import various modules and libraries needed for the function to work.

The function has an if statement that checks the value of the Platform.OS property. This property returns a string that represents the current platform of the 
device (either "ios" or "android"). If the platform is "ios", an alert is displayed to the user telling them that they cannot close the app and instructing them to 
press the home button to close it. If the platform is "android", the function calls the BackHandler.exitApp() method which closes the app.

This function is then exported using the export default CloseApp statement which allows it to be used in other parts of the application.*/}


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