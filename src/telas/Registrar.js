import React from 'react';
import {SafeAreaView, View, Text, ImageBackground, Image} from 'react-native';
import image from '../img/background_milhao.jpg'
import logo from '../img/icone_milhao.png'
import Styles from '../styles/Styles'
import Botao from '../components/Botao'
import CaixaDeTexto from '../components/CaixaDeTexto';

export default function Registrar({navigation}) {
    const acessaSeRegistro = () => {
        navigation.push('SeRegistro');
      }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={Styles.container}>
                <ImageBackground source={image} style={Styles.background}>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 2 }}>
                        <Image source={logo} style={Styles.logo} />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "flex-end", flex: 3 }}>
                        <Text style={{fontSize:40, color:'white', marginBottom:20}}>Crie sua conta</Text>
                        <CaixaDeTexto placeholder='Nickname' />
                        <CaixaDeTexto placeholder='E-mail' marginTop={20} />
                        <CaixaDeTexto placeholder='Senha' marginTop={20} />
                        <CaixaDeTexto placeholder='Confirma senha' marginTop={20} />
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                        <Botao width={190} height={55} text='Registre-se' onPress={acessaSeRegistro}/>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>

    );
}

