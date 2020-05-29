import React from 'react';
import { Text, View } from 'react-native';

export default function Pergunta(props) {
    return (
        <View style={{
        alignItems: 'center', 
        justifyContent: 'space-around',
        height: 70,
        width: 400,
        borderColor: '#B88E44',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: 'black',
        
        }}>
            <Text style={{
                fontSize: 18,
                color: 'white',
             }}>
                 {props.text}
            </Text>
        </View>
    );
}