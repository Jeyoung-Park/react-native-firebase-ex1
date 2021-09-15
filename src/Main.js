import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import GoogleSignInView from './GoogleSignInView';
import FireStoreView from './FireStoreView';

const Main = ({navigation}) => {
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
      <Text>login success!!</Text>
      <Text>{user.email}</Text>
      <Button
        title="정보 입력하기"
        onPress={() => navigation.navigate('InputView')}
      />
      <Button
        title="정보 조회하기"
        onPress={() => navigation.navigate('ReadView')}
      />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
