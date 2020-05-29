import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image} from 'react-native';
import image from '../img/background_milhao.jpg'
import logo from '../img/icone_milhao.png'
import Styles from '../styles/Styles'
import Botao from '../components/Botao'

export default function  LinkSenha({navigation}) {
    
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
                        <Botao width={200} height={55} text='Continuar'/>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

