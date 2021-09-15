import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/Main';
import InputView from './src/InputVIew';
import ReadView from './src/ReadView';

const Stack = createNativeStackNavigator();

const App = ({params}) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="InputView" component={InputView} />
      <Stack.Screen name="ReadView" component={ReadView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
