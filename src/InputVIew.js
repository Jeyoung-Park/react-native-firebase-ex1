import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const InputView = ({
    params,
}) => {

    const [text, setText]=useState('');

    const postValue=()=>{
        firestore()
        .collection('Collection1')
        // .doc('y392j6x7RiVicabwSxhJ')
        .add({
            loginId:'id',
            username:'name',
            message:text,
        })
        .then(()=>{
            console.warn('추가가 성공하였습니다.');
        })
    }

    return(
        <SafeAreaView style={{flex:1,}}>
            <Text>메시지 입력하기</Text>
            <TextInput 
                placeholder='메시지를 입력해주세요.'
                value={text}
                onChangeText={(text)=>setText(text)}
            />
            <Button 
                title='제출하기'
                onPress={()=>{
                    console.log('text in 제출하기, ', text);
                    postValue();
                    setText('');
                }}
            />
        </SafeAreaView>
    )
}

export default InputView;
