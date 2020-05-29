import React from 'react';
import {SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import image from '../img/background_milhao.jpg';
import logo from '../img/icone_milhao.png';
import Styles from '../styles/Styles';
import Botao from '../components/Botao';
import CaixaDeTexto from '../components/CaixaDeTexto';


export default function Login({navigation}) {
    const acessatelaInicial = () => {
        navigation.push('Inicial');
    }
    const acessaRegistrar = () => {
        navigation.push('Registra');
    }
    const acessaRecuperSenha = () => {
        navigation.push('Senha');
    }
        
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
                            <Text style={{ color: 'white' }} onPress={acessaRecuperSenha}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "space-evenly", flex: 1 }}>
                        <Botao width={190} height={50} text='Login' onPress= {acessatelaInicial}/>
                        <Botao width={190} height={50} text='Registre-se' onPress={acessaRegistrar}/>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>

    );
}

