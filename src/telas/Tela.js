import React from 'react';
import { SafeAreaView, View, Text, Button, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import image from './src/img/background_milhao.jpg'
import logo from './src/img/icone_milhao.png'
import Styles from './src/styles/Styles'
import Botao from './src/components/Botao'
import CaixaDeTexto from './src/components/CaixaDeTexto';

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <ImageBackground source={image} style={Styles.background}>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <Image source={logo} style={Styles.logo} />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <CaixaDeTexto placeholder='Email' />
                        <CaixaDeTexto placeholder='Senha' marginTop={20} />
                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <Text style={{ color: 'white' }}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "space-evenly", flex: 1 }}>
                        <Botao width={150} text='Login' />
                        <Botao width={150} text='Registre-se' />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>

    );
};

export default Login;