import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default function Pergunta(props) {

    return (
        <View style={{color : 'red'}}>
            <Text
                style={{
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 20,
                    height: 50,
                    width: 300,
                    borderColor: 'green',
                    borderWidth: 1,
                    borderRadius: 5,
                    alignSelf: 'center'
                }}
            />
        </View>
    );
}