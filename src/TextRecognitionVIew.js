import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MlkitOcr from 'react-native-mlkit-ocr';

const TextRecognitionView = ({params}) => {
  const [image, setImage] = useState();
  const [result, setResult] = useState({});

  console.log('image, ', image);
  console.log('result, ', result);

  const onImageSelect = async media => {
    // console.log('onImageSelect');
    console.log('onImageSelect, ', media);
    // if (!media.didCancel) {
    //   setImage(media.assets[0].uri);
    // }
    setImage(media.assets[0].uri);
    // const processingResult = await ml().cloudDocumentTextRecognizerProcessImage(
    //   media.assets[0].uri
    // );
    // console.log(processingResult);
    // setResult(processingResult);
    // const processed = await vision().cloudDocumentTextRecognizerProcessImage(media.assets[0].uri);
    // console.log('Found text in document: ', processed);
    // setResult(processed.text)
    const resultFromFile = await MlkitOcr.detectFromFile(media.assets[0].uri);
    console.log('resultFromFile, ', resultFromFile);
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
      <Text>Image</Text>
      <Image style={{width: 200, height: 200}} source={{uri: image}} />
      <Text>Result</Text>
      <Text>{result.text}</Text>
    </SafeAreaView>
  );
};

export default TextRecognitionView;
