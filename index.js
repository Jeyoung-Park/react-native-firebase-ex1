/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

// background handlder 등록
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('message handled in the background', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
