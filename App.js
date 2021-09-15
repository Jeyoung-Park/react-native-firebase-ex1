import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Main';

const Stack = createNativeStackNavigator();

const App = ({
    params,
}) => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name="Main" component={Main}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
