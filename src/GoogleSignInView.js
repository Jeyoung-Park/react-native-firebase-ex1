import React, {useState} from 'react';
import {Button, TextInput, Text, View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function GoogleSignInView({login, setLogin}) {
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const onEmailButtonPress = async () => {
    auth()
      .createUserWithEmailAndPassword(id, pw)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  async function onGoogleButtonPress() {
    console.log('onGoogleButtonPress Clicked');

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    console.log('idToken, ', idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View>
      <Text>ID</Text>
      <TextInput
        style={styles.textinput}
        placeholder="ID"
        onChangeText={text => setId(text)}
      />
      <Text>PW</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        onChangeText={text => setPw(text)}
        textContentType={'password'}
      />
      <Button
        title="이메일로 로그인"
        onPress={() => {
          onEmailButtonPress().then(() => {
            setLogin(true);
          });
        }}
      />
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() => {
            setLogin(true);
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    width: 300,

    borderColor: 'black',
    borderWidth: 1,

    marginTop: 16,
    marginBottom: 24,
  },
});
