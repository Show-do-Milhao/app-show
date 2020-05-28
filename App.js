import React from 'react';
import { SafeAreaView, View, Text, Button, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import image from './src/img/background_milhao.jpg'
import logo from './src/img/icone_milhao.png'
import Styles from './src/styles/Styles'
import Botao from './src/components/Botao'

const LinkSenha = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <ImageBackground source={image} style={Styles.background}>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <Image source={logo} style={Styles.logo} />
                    </View>
                    <View style={{ justifyContent: "center", flex: 1 }}>
                        <Text style={{ fontSize: 30, color: 'white', alignItems: "center", textAlign: "center", ...Styles.textWithShadow, lineHeight: 40 }}>Enviamos um link de redefinição de senha para:</Text>
                        <Text style={{ fontSize: 30, color: 'white', alignItems: "center", textAlign: "center", ...Styles.textWithShadow }}>-------@gmail.com</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "flex-start", flex: 1 }}>
                        <Botao width={200} height={70} text='Continuar' />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

export default LinkSenha;