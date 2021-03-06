import React, {useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/Main';
import InputView from './src/InputVIew';
import ReadView from './src/ReadView';
import TextRecognitionView from './src/TextRecognitionVIew';
import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();

const App = ({params}) => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('FCM message, ', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="InputView" component={InputView} />
        <Stack.Screen name="ReadView" component={ReadView} />
        <Stack.Screen
          name="TextRecognitionView"
          component={TextRecognitionView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
