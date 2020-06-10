import React from 'react';
import { SafeAreaView, ImageBackground, View, Text, Image } from 'react-native';
import img from '../img/game_over.jpg';
import Botao from '../components/Botao';
import Styles from '../styles/Styles';

export default function TelaInicial({ route, navigation }) {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <ImageBackground source={img} style={{ width: 435, height: 600, }}>
      </ImageBackground>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Botao text='Ir para tela inicial' width={250} height={55} onPress={() => { navigation.navigate('Inicial') }} />
      </View>
    </SafeAreaView>

  );
}