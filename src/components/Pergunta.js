import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default function Pergunta(props) {

    return (
        <View>
            <Text style={{
                textAlign: 'center',
                fontSize: 18,
                height: 80,
                width: 400,
                borderColor: '#B88E44',
                borderWidth: 1,
                borderRadius: 30,
                alignSelf: 'center',
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                {props.text}
            </Text>
        </View>
    );
}