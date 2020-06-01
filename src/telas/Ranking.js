import React from 'react';
import {SafeAreaView, ImageBackground, View, Text} from 'react-native';
import img from '../img/background_milhao.jpg';
import Botao from'../components/Botao';


export default function Ranking ({route, navigation}) {
    const acessaVoltaLogin = () => {
      navigation.push('VoltaPerfil');
    }
    const acessaTelaInicial = () => {
      navigation.push('VoltaLogin');
    }

  return(
  <SafeAreaView style={{flex:1}} >
    <ImageBackground source = {img} style={{flex:1}}>
      <View style={{flex: 4.3, alignItems: 'center', justifyContent: 'space-around'}}>
      </View>
      <View style={{flex: 1.7, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Ir Para o Inicio' width= {250} height= {55} onPress={() => {navigation.navigate("VoltaPerfil")}}/>
          <Botao text = 'Sair' width= {190} height= {55} onPress = {acessaTelaInicial}/>
      </View>
    </ImageBackground>
  </SafeAreaView>

  );
}