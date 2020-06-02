import React from 'react';
import { SafeAreaView, View, ImageBackground, Image, Alert } from 'react-native';
import image from '../img/background_milhao.jpg';
import logo from '../img/icone_milhao.png';
import Styles from '../styles/Styles';
import Botao from '../components/Botao';
import CaixaDeTexto from '../components/CaixaDeTexto';
import axios from 'axios';

class BuscarUsuario extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',  
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
                        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <CaixaDeTexto placeholder='Digite seu Email' onChangeText={email => this.setState({ email: this.state.email = email })} />
                        </View>
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Botao width={190} height={50} text='Buscar' onPress={() => {
                                if (this.state.email != '') {
                                    axios.post('https://show-do-milhao-app.herokuapp.com/validaEmail', {
                                        email: this.state.email,
                                    })
                                        .then(res => {
                                            console.log(res)
                                            const email = res.data.map(nicemailkname => email.email)
                                            this.setState({ email })
                                            console.log(this.state.email)
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                        })
                                        .finally(() => {
                                            if (this.state.email != '') {
                                                this.props.navigation.navigate('RedefinirSenha', {
                                                    email: this.state.email,
                                                })
                                            } else {
                                                Alert.alert("Erro!", 'Email incorreto')
                                            }
                                        })
                                } else {
                                    Alert.alert("Erro!", 'Preencha todos os campos')
                                }
                            }} />
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>

        );
    }
}

export default BuscarUsuario;