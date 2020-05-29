
import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, Button, View, Text, Image, TextInput } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import img from './src/img/background_milhao.jpg';
import Botao from './src/components/Botao';
import styles from './src/styles/Styles';
import Pergunta from './src/components/Pergunta';
import Alternativas from './src/components/Alternativas';
import Status from './src/components/Status';

const usuarios = { uri: 'https://http2.mlstatic.com/mascara-la-casa-de-papel-top-D_NQ_NP_667175-MLB28219066519_092018-F.jpg' }


export default function telaInicial({ navigation }) {
    const acessaPerfil = () => {
        navigation.push('Perfil');
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ImageBackground source={img} style={{ flex: 1 }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around' }}>
                    <Pergunta text='O QUE É A VIA LÁCTEA?' />
                </View>
                <View style={{ flex: 3, alignItems: 'center', }}>
                    <Alternativas textnumber='1' text='Marca de Leite' />
                    <Alternativas textnumber='2' text='Civilização Antiga' />
                    <Alternativas textnumber='3' text='Carro' />
                    <Alternativas textnumber='4' text='Galaxia' />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft : 20, marginRight : 20}}>
                    <Status text={`Errar \n-500`}/>
                    <Status text={`Score \n500`}/>
                    <Status text={`Acertar \n1000`}/>

                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                    <Botao text='Parar' width={140} height={40} />
                    <Botao text='Pular 1/3' width={140} height={40} style={{ marginLeft: 100 }} />

                </View>
            </ImageBackground>
        </SafeAreaView>

    );
}




