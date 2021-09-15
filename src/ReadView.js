import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const ReadView = ({params}) => {
  const ref = firestore().collection('Collection1');

  const [list, setList] = useState([]);

  console.log('list in ReadView, ', list);

  const getListData = async () => {
    const result = await firestore().collection('Collection1').get();
    console.log('result in getListData, ', result);
    return result._W._docs;
  };

  useEffect(() => {
    // setList(getListData());
    ref.onSnapshot(querySnapShot => {
      const tempList = [];
      querySnapShot.forEach(doc => {
        console.log('doc in onSnapshot, ', doc.data());
        tempList.push(doc.data());
      });
      setList(tempList);
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {list && (
        <FlatList
          style={{
            flex: 1,
            // backgroundColor:'red',
          }}
          data={list}
          keyExtractor={(item, index) => {
            return index;
          }}
          renderItem={({item, index}) => {
            return (
              <View>
                <Text>{item.username}</Text>
                <Text>{item.loginId}</Text>
                <Text>{item.message}</Text>
              </View>
            );
          }}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{backgroundColor: 'gray', height: 1, width: '100%'}}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default ReadView;
