import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import GoogleSignInView from './src/GoogleSignInView';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // 언마운트시 unsubscribe;
  });

  if (initializing) {
    return (
      <SafeAreaView style={styles.container_center}>
        <ActivityIndicator color="blue" size="large" />
      </SafeAreaView>
    );
  }

  if (!user) {
    return (
      <SafeAreaView style={styles.container_center}>
        <Text>Login</Text>
        <GoogleSignInView />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container_center}>
      <Text>{user.email}</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
