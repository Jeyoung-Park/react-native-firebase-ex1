import React from 'react';
import {Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';



export default function GoogleSignInView() {
  async function onGoogleButtonPress() {
    console.log('onGoogleButtonPress Clicked');

    GoogleSignin.configure({
      webClientId:
        '802676014569-shlbu3foi2cqmcf6aib61uhj9add1mcr.apps.googleusercontent.com',
    });

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    console.log('idToken, ', idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
    />
  );
}
