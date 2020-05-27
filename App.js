import React from 'react';
import { TouchableOpacity, Text, View , Alert} from 'react-native';
import Botao from './src/components/Botao';


export default function App() {
  const lidarComClique = () => {
    Alert.alert ('Botao Clicável') 
  };

  return (
      <View>
          <Botao texto= ' aiudhauidhiuasidhu ' altura= {100} onPress= {lidarComClique}>
              
          </Botao>
      </View>
  )
}