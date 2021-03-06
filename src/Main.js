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
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '802676014569-shlbu3foi2cqmcf6aib61uhj9add1mcr.apps.googleusercontent.com',
});

const Main = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [login, setLogin]=useState(false);

  const onAuthStateChanged = user => {
    console.log('onAuthStateChanged');
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

  if (!user||!login) {
    return (
      <SafeAreaView style={styles.container_center}>
        <Text>Login</Text>
        <GoogleSignInView login={login} setLogin={(param)=>{setLogin(param)}}/>
      </SafeAreaView>
    );
  }

  console.log('user, ', user);

  return (
    <SafeAreaView style={styles.container_center}>
      <Button 
        title="로그아웃"
        onPress={()=>{
          GoogleSignin.signOut().then(()=>{
            setUser(null);
            setLogin(false);
            console.warn('로그아웃 성공');
          })
        }}
      />
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
      <Button
        title="텍스트 인식 페이지 가기"
        onPress={() => navigation.navigate('TextRecognitionView')}
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
