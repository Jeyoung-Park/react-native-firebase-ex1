import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUSer] = useState();

  const onAuthStateChanged = user => {
    setUSer(user);
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
  container_center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
