import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


export default function Alternativas(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                height: 50,
                marginTop: 10,
                width: 400,
                borderColor: '#B88E44',
                borderRadius: 10,
                borderWidth: 2
            }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white'
            }}>
                {props.texto}
            </Text>
        </TouchableOpacity>
    )
}