import React , {useState} from 'react';
import { View , Alert} from 'react-native';
import CaixaDeTexto from './src/components/CaixaDeTexto';


export default function App() {
    const [value, onChangeText] = useState('');

  return (
      <CaixaDeTexto placeholder= {'Email'} onChangeText={onChangeText} value={value}>
          
      </CaixaDeTexto>
  )
}