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
                backgroundColor: '#363636',
                height: 50,
                marginTop: 10,
                width: props.largura,
                borderRadius: 50,
            }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white'
            }}>
                {props.texto}
            </Text>
        </TouchableOpacity>
    )
}