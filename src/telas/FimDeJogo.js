
import React from 'react';
import {SafeAreaView, ImageBackground, View, Text, Image} from 'react-native';
import img from '../img/background_milhao.jpg';
import Botao from'../components/Botao';
import styles from'../styles/Styles';
import ScoreFinal from '../components/ScoreFinal';

const usuarios = {uri: 'https://http2.mlstatic.com/mascara-la-casa-de-papel-top-D_NQ_NP_667175-MLB28219066519_092018-F.jpg'}


export default function TelaInicial({route, navigation}) {
    const acessaPerfil = () => {
      navigation.navigate('Perfil');
    }
    const acessaLogin = () => {
      navigation.navigate('Login');
    }
    const TelaInicial = () => {
      navigation.navigate('Inicial');
    }
    const acessaJogo = () => {
      navigation.navigate('VamosJogo');
    }


  return(
  <SafeAreaView style={{flex:1}} >
    <ImageBackground source = {img} style={{flex:1}}>
      <View style={{flex: 2, alignItems: 'center', justifyContent: 'space-around'}}>
      <ScoreFinal text = {`PARABÉNS! \nVOCÊ GANHOU ` + route.params.score + ` REAIS`} />
      </View>
      <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Jogar novamente'  width= {250} height= {55} onPress = {acessaJogo}/>
          <Botao text = 'Ir para tela inicial' width= {250} height= {55} onPress={TelaInicial}/>
      </View>

      <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Botao text = 'Sair' width= {180} height= {55} onPress = {acessaLogin}/>
      </View>
    </ImageBackground>
  </SafeAreaView>

  );
}