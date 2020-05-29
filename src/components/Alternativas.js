import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
export default function Alternativas(props) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                alignItems: 'center',
                height: 50,
                marginTop: 10,
                width: 400,
                borderColor: '#B88E44',
                borderRadius: 10,
                borderWidth: 2,
                flexDirection: 'row',
                backgroundColor: 'white'

            }}>
            <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: 'black',
                backgroundColor: 'red',
                width: 35,
                height: 35,
                borderRadius: 50,
                textAlign: 'center',
                marginLeft: 2
            }}>
                {props.textnumber}
            </Text>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                flexDirection: 'column',
                paddingLeft: 5
            }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}