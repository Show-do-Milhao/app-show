import React, { Component } from 'react';
import { TextInput } from 'react-native';


export default function  CaixaDeEmail() {
  const [value, onChangeText] = React.useState('Exemplo');

  return (
    <TextInput
    style={{ 
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      height: 50,
      width: 300,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 5,
      
    }}
    onChangeText={text => onChangeText(text)}
    value={value}
    />
  );
}