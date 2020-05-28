import React from 'react';
import { View , Alert} from 'react-native';
import Alternativas from './src/components/Alternativas';


export default function App() {
  
  return (
      <View>
          <Alternativas
          textnumber= {1} 
           text= 'Ola mundo'
           />
           
      </View>
  )
}