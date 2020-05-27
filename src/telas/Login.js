import React from 'react';
import { SafeAreaView, View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import image from './src/img/background_milhao.jpg'
import Background from './src/styles/Background'

const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Background.container}>
                <ImageBackground source={image} style={Background.image}>
                </ImageBackground>
            </View>
        </SafeAreaView>

    );
};

export default Login;