import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


export default function Botao(props) {
    const lidarComClique = () => {
        console.log('Botao Clicável')
    };

    return (
        <TouchableOpacity
        onPress= {props.onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
                height: props.altura,
                marginTop: 10
            }}>
            <Text>{props.texto}</Text>
        </TouchableOpacity>
    )
}