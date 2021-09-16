import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const TextRecognitionView = ({params}) => {
  const onImageSelect = (media) => {
    // console.log('onImageSelect');
    if(!media.didCancel){
        
    }
  };

  const onTakePhoto = () => {
    launchCamera({mediaType: 'photo'}, onImageSelect);
  };

  const onSelectImagePress = () => {
    launchImageLibrary({mediaType: 'photo'}, onImageSelect);
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="사진 찍기" onPress={onTakePhoto} />
      <Button title="앨범에서 가져오기" onPress={onSelectImagePress} />
    </SafeAreaView>
  );
};

export default TextRecognitionView;
