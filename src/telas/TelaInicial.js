
import React from 'react';
import {SafeAreaView, ImageBackground, View, Text, Image} from 'react-native';
import img from '../img/background_milhao.jpg';
import Botao from'../components/Botao';
import styles from'../styles/Styles';

const usuarios = {uri: 'https://http2.mlstatic.com/mascara-la-casa-de-papel-top-D_NQ_NP_667175-MLB28219066519_092018-F.jpg'}


export default function TelaInicial({navigation}) {
    const acessaPerfil = () => {
      navigation.push('Perfil');
    }
    const acessaLogin = () => {
      navigation.push('Login');
    }
    const acessaRanking = () => {
      navigation.push('SeuRanking');
    }
    const acessaJogo = () => {
      navigation.push('VamosJogo');
    }


  return(
  <SafeAreaView style={{flex:1}} >
    <ImageBackground source = {img} style={{flex:1}}>
      <View style={{flex: 2.5, alignItems: 'center', justifyContent: 'space-around'}}>
        <Image source={usuarios} style={styles.foto}></Image>
        <Text style={{fontSize: 20, fontWeight: 'bold',color: 'white'}}>INDIRA</Text>
      </View>
      <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Iniciar Jogo' width= {250} height= {55} onPress={acessaJogo}/>
          <Botao text = 'Perfil'  width= {250} height= {55} onPress = {acessaPerfil}/>
          <Botao text = 'Ranking' width= {250} height= {55} onPress={acessaRanking}/>
      </View>

      <View style={{flex: 1.5, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Sair' width= {190} height= {55} onPress = {acessaLogin}/>
      </View>
    </ImageBackground>
  </SafeAreaView>

  );
}




