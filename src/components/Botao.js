import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


export default function Botao(props) {
    const lidarComClique = () => {
    };

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#8499A2',
                height: 50,
                marginTop: 10,
                width: props.width,
                borderRadius: 50,
                borderColor: '#B88E44',
                borderWidth: 2
            }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white'
            }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}