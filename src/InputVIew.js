import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';

const InputView = ({
    params,
}) => {

    const [text, setText]=useState('');

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
                    setText('');
                }}
            />
        </SafeAreaView>
    )
}

export default InputView;
