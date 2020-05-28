import React from 'react';
import { SafeAreaView, View, Text, Button, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import image from './src/img/background_milhao.jpg'
import logo from './src/img/icone_milhao.png'
import Styles from './src/styles/Styles'
import Botao from './src/components/Botao'
import CaixaDeTexto from './src/components/CaixaDeTexto';

const BuscaUsuario = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <ImageBackground source={image} style={Styles.background}>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <Image source={logo} style={Styles.logo} />
                    </View>
                    <View style={{ justifyContent: "center", flex: 1 }}>
                       <CaixaDeTexto placeholder='Digite seu e-mail'></CaixaDeTexto>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "flex-start", flex: 1 }}>
                        <Botao width={200} height={70} text='Continuar' />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

export default BuscaUsuario;