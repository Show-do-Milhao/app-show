import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


export default function Alternativas(props) {
    const clicar = () => {
    };

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: 'white',
                height: 50,
                marginTop: 10,
                width: 400,
                borderColor: 'black',
                borderRadius: 10, 
            }}>
            <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black'
            }}>
                {props.texto}
            </Text>
        </TouchableOpacity>
    )
}