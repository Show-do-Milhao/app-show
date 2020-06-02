
import React from 'react';
import {SafeAreaView, ImageBackground, View, Text, Image} from 'react-native';
import img from '../img/background_milhao.jpg';
import Botao from'../components/Botao';
import ScoreFinal from '../components/ScoreFinal';


export default function TelaInicial({route, navigation}) {

  return(
  <SafeAreaView style={{flex:1}} >
    <ImageBackground source = {img} style={{flex:1}}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'space-around'}}>
      <ScoreFinal text = {`PARABÉNS! \nVOCÊ GANHOU ` + route.params.score + ` REAIS`} />
      </View>
      <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Jogar novamente'  width= {250} height= {55} onPress={() => {navigation.navigate('Vamosjogo')}}/>
          <Botao text = 'Ir para tela inicial' width= {250} height= {55} onPress={() => {navigation.navigate('Inicial')}}/>
      </View>

      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Botao text = 'Sair' width= {180} height= {55} onPress={() => {navigation.navigate('Login')}}/>
      </View>
    </ImageBackground>
  </SafeAreaView>

  );
}