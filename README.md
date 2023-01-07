# mictest1


``````````````````````````````````````````````
Expo App SiteMap
``````````````````````````````````````````````


./App.js
./app.json
./assets/adaptive-icon.png
./assets/favicon.png
./assets/icon.png
./assets/splash.png
./babel.config.js
./Components/CommandList/commands/closeApp.jsx
./Components/CommandList/commands/openApp.jsx
./Components/CommandList/index.jsx
./Components/MicrophonePrompt/index.jsx
./Components/VoiceCommandSelector/index.jsx
./package-lock.json
./package.json


`````````````````````````````````````````````
The App Summaray Flow
`````````````````````````````````````````````


In summary, the app flow is as follows:

1) The App component is rendered.
2) The MicrophonePrompt component is rendered and calls the requestPermission function to request microphone permission.
3) If permission is granted, the onPermissionGranted callback is called which updates the permissionGranted state variable in the App component and renders the VoiceCommandSelector component.
4) The VoiceCommandSelector component starts listening for voice commands and processes the recognized speech using the executeCommand function.
5) The executeCommand function determines the appropriate response to the command and updates the response state variable.
6) The user can start or stop listening for voice commands using the button in the VoiceCommandSelector component.
7) If the user issues a command to open or close the app, the OpenApp or CloseApp function is called, respectively.


```````````````````````````
THE APP FLOW
```````````````````````````


The app is a voice command app that allows the user to issue voice commands to the app and receive a response. The app has two main components: App and MicrophonePrompt.

The App component is the root component of the app and is responsible for rendering the main interface of the app. When the App component is rendered, it displays a greeting message and a MicrophonePrompt component. It also has state variables for permissionGranted and result, which are used to store the microphone permission status and the result of the voice command, respectively.

The MicrophonePrompt component is responsible for requesting microphone permission from the user and rendering the VoiceCommandSelector component when permission is granted. When the MicrophonePrompt component is mounted, it calls the requestPermission function which attempts to request microphone permission from the user. If permission is granted, the onPermissionGranted callback function is called which updates the permissionGranted state variable in the App component to true and renders the VoiceCommandSelector component. If permission is denied or blocked, the MicrophonePrompt component displays a message to the user telling them that microphone access is required and provides a button to open the device's settings where the user can change the microphone access permission.

The VoiceCommandSelector component is responsible for listening for voice commands and executing them. When the component is rendered, it starts listening for voice commands and processes the recognized speech using the executeCommand function. The executeCommand function determines the appropriate response to the command and updates the response state variable with the response. The VoiceCommandSelector component also has a button that allows the user to start or stop listening for voice commands.

The CommandList component is a list of possible voice commands and their corresponding responses. It has a switch statement that checks the value of the command prop and executes the appropriate code for the command. The OpenApp and CloseApp functions are called when the corresponding commands are issued. The OpenApp function attempts to open the app with the URL "mictest://" and displays an error message if the app is not installed. The CloseApp function closes the app, with the exact behavior depending on the platform. On iOS devices, it displays an alert telling the user to press the home button to close the app. On Android devices, it calls the BackHandler.exitApp function which closes the app.


