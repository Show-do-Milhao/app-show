import React, { Component } from 'react';
import { TextInput } from 'react-native';


export default function CaixaDeTexto(props) {
  // const [value, onChangeText] = React.useState('');

  return (
    <TextInput placeholderTextColor= 'white' placeholder= {props.placeholder}
      style={{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        height: 50,
        width: 300,
        marginTop: props.marginTop,
        borderColor: '#B88E44',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: 'center'
      }}

      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}