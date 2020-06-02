import React from 'react';
import {SafeAreaView, View, ImageBackground, Image, } from 'react-native';
import image from '../img/background_milhao.jpg'
import logo from '../img/icone_milhao.png'
import Styles from '../styles/Styles'
import Botao from '../components/Botao'
import CaixaDeSenha from '../components/CaixaDeSenha';

class RedefinirSenha extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
     return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <ImageBackground source={image} style={Styles.background}>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <Image source={logo} style={Styles.logo} />
                    </View>
                    <View style={{ justifyContent: "space-around", flex: 1 }}>
                       <CaixaDeSenha placeholder='Digite a nova senha'/>
                       <CaixaDeSenha placeholder='Confirme a nova senha'/>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "space-around", flex: 1 }}>
                        <Botao width={200} height={55} text='Redefinir' onPress={() => this.props.navigation.navigate('Login')}/>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
 }
}
export default RedefinirSenha;
