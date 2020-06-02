import React from 'react';
import {SafeAreaView, ImageBackground, View} from 'react-native';
import img from '../img/background_milhao.jpg';
import Botao from'../components/Botao';


export default function Ranking ({navigation}) {
   
  return(
  <SafeAreaView style={{flex:1}} >
    <ImageBackground source = {img} style={{flex:1}}>
      <View style={{flex: 4.3, alignItems: 'center', justifyContent: 'space-around'}}>
      </View>
      <View style={{flex: 1.7, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Ir para tela inicial' width= {250} height= {55} onPress={() => {navigation.navigate("Inicial")}}/>
          <Botao text = 'Sair' width= {190} height= {55} onPress={() => {navigation.navigate("Login")}}/>
      </View>
    </ImageBackground>
  </SafeAreaView>

  );
}