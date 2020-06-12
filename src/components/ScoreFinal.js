import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

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
                backgroundColor: '#708090',
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                marginTop: 10,
                color: 'white',
                textShadowColor: 'black'
                
                
            }}>
                {props.text}
            </Text>
        </View>
    );
}