import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default function (props) {
    return (
        <View>
            <Text style={{
                textAlign: 'center',
                fontSize: 18,
                height: 50,
                width: 300,
                borderColor: '#B88E44',
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: 'center',
                backgroundColor: '#00FF00',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                {props.text}
            </Text>
        </View>
    );
}