import React from 'react';
import { View, Text, TouchableOpacity, Linking} from 'react-native';
import { Audio } from 'expo-av';


class MicPermissionPrompt extends React.Component {
  state = {
    isDenied: false,
    isBlocked: false,
    hasPermission: null,
  };

  componentDidMount() {
    console.log('Component mounted');
    this.requestPermission();
  }

  requestPermission = async () => {
    try {
      console.log('Requesting permission');
      const { granted } = await Audio.requestPermissionsAsync();
      console.log(`Permission granted: ${granted}`);
      this.setState({
        hasPermission: granted,
        isDenied: !granted,
        isBlocked: false,
      });
      if (granted) {
        this.props.onPermissionGranted();
      }
    } catch (err) {
      console.warn(err);
      if (err.indexOf('blocked') !== -1) {
        this.setState({ isDenied: false, isBlocked: true });
      } else {
        this.setState({ isDenied: true, isBlocked: false });
      }
    }
  };

  openSettings = () => {
    try {
      console.log('Opening settings');
      Linking.openSettings();
    } catch (error) {
      console.error("Couldn't open settings", error);
    }
  };

  render() {
    const { isDenied, isBlocked, hasPermission } = this.state;
    if (hasPermission === null) {
      return (
        <View>
          <Text>Waiting for permission</Text>
        </View>
      );
    }
    if (isBlocked || isDenied) {
      return (
        <View>
          <Text>Microphone access is required for this app.</Text>
          {isDenied ? (
            <Text>
              You have denied microphone access. You can change this in your device's settings.
            </Text>
          ) : (
            <Text>
              You have blocked microphone access. You can change this in your device's settings.
            </Text>
          )}
          <TouchableOpacity onPress={this.openSettings}>
            <Text>Open settings</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
<></>
    );
  }
}
export default MicPermissionPrompt;