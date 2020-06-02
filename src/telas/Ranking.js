import React from 'react';
import {SafeAreaView, ImageBackground, View} from 'react-native';
import img from '../img/background_milhao.jpg';
import Botao from'../components/Botao';
import ScoreFinal from'../components/ScoreFinal';



export default function Ranking ({navigation}) {
   
  return(
  <SafeAreaView style={{flex:1}} >
    <ImageBackground source = {img} style={{flex:1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <ScoreFinal text={`Ektor Bonilha \n  1000000`}/>
        <ScoreFinal text={`Indira \n  500000`}/>
        <ScoreFinal text={`Gabriel \n  500000`}/>
        <ScoreFinal text={`Poucas Trancas \n  250000`}/>
        <ScoreFinal text={`Professor Sapatin \n  100000`}/>
        <ScoreFinal text={`Senhor Furtado \n  50000`}/>
        <ScoreFinal text={`Jaiminho Carteiro \n  10000`}/>
        <ScoreFinal text={`Maria Joaquina \n  10000`}/>
        
      </View>
      <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Ir para tela inicial' width= {250} height= {55} onPress={() => {navigation.navigate("Inicial")}}/>
          <Botao text = 'Sair' width= {190} height= {55} onPress={() => {navigation.navigate("Login")}}/>
      </View>
    </ImageBackground>
  </SafeAreaView>

  );
}