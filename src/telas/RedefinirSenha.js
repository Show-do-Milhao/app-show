import React from 'react';
import {SafeAreaView, View, ImageBackground, Image, } from 'react-native';
import image from '../img/background_milhao.jpg'
import logo from '../img/icone_milhao.png'
import Styles from '../styles/Styles'
import Botao from '../components/Botao'
import CaixaDeTexto from '../components/CaixaDeTexto';

export default function  RedefinirSenha({navigation}) {
    const acessaLink = () => {
        navigation.navigate('Senha');
      }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <ImageBackground source={image} style={Styles.background}>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <Image source={logo} style={Styles.logo} />
                    </View>
                    <View style={{ justifyContent: "space-around", flex: 1 }}>
                       <CaixaDeTexto placeholder='Digite a nova senha'></CaixaDeTexto>
                       <CaixaDeTexto placeholder='Confirme a nova senha'></CaixaDeTexto>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "space-around", flex: 1 }}>
                        <Botao width={200} height={55} text='Redefinir' onPress={acessaLink}/>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}
