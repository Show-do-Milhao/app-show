import React from 'react';
import {SafeAreaView, ImageBackground, View, Text, Image} from 'react-native';
import img from '../img/game_over.png';
import Botao from'../components/Botao';
import Styles from'../styles/Styles';

export default function TelaInicial({route, navigation}) {

  return(
  <SafeAreaView style={{flex: 1}} >
    <ImageBackground source = {img} style={{width: '100%', height: '100%', position: 'absolute'}}>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-end', marginBottom : 100}}>
          <Botao text = 'Ir para tela inicial' width= {250} height= {55} onPress={() => {navigation.navigate('Inicial')}}/>
      </View>
    </ImageBackground>
  </SafeAreaView>
  );
}