
import React, {useState} from 'react';
import {SafeAreaView, ImageBackground, Button, View, Text, Image, TextInput} from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import img from '../img/background_milhao.jpg';
import Botao from'../components/Botao';
import styles from'../styles/Styles';

const usuarios = {uri: 'https://http2.mlstatic.com/mascara-la-casa-de-papel-top-D_NQ_NP_667175-MLB28219066519_092018-F.jpg'}


export default function telaInicial({navigation}) {
    const acessaPerfil = () => {
      navigation.push('Perfil');
    }

  return(
  <SafeAreaView style={{flex:1}} >
    <ImageBackground source = {img} style={{flex:1}}>
      <View style={{flex: 2.5, alignItems: 'center', justifyContent: 'space-around'}}>
        <Image source={usuarios} style={styles.foto}></Image>
        <Text style={{fontSize: 20, fontWeight: 'bold',color: 'white'}}>INDIRA</Text>
      </View>
      <View style={{flex:2, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Iniciar Jogo' width= {250} height= {60}/>
          <Botao text = 'Perfil' onPress = {acessaPerfil} width= {250} height= {60}/>
          <Botao text = 'Records' width= {250} height= {60}/>
      </View>

      <View style={{flex: 1.5, alignItems: 'center', justifyContent: 'space-around'}}>
          <Botao text = 'Sair' width= {190} height= {70}/>
      </View>
    </ImageBackground>
  </SafeAreaView>

  );
}




