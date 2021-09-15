import React from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FireStoreView = ({params}) => {
//   const usersCollection = firestore().collection('Collection1').doc('y392j6x7RiVicabwSxhJ').get();
//   console.log('usersCollection, ', usersCollection);
  return (
    <View>
      <Text>FireStoreView</Text>
    </View>
  );
};

export default FireStoreView;
