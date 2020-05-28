import React from 'react';
import { SafeAreaView, View, Text, Button, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import image from './src/img/background_milhao.jpg'
import logo from './src/img/icone_milhao.png'
import Styles from './src/styles/Styles'
import Botao from './src/components/Botao'
import CaixaDeTexto from './src/components/CaixaDeTexto';

const Registrar = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <ImageBackground source={image} style={Styles.background}>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 2 }}>
                        <Image source={logo} style={Styles.logo} />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "flex-end", flex: 3 }}>
                        <Text style={{fontSize:50, color:'white', marginBottom:20}}>Crie sua conta</Text>
                        <CaixaDeTexto placeholder='Nickname' />
                        <CaixaDeTexto placeholder='E-mail' marginTop={20} />
                        <CaixaDeTexto placeholder='Senha' marginTop={20} />
                        <CaixaDeTexto placeholder='Confirma senha' marginTop={20} />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
                        <Botao width={250} height={70} text='Registre-se' />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>

    );
};

export default Registrar;