import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import image from '../img/background_milhao.jpg';
import logo from '../img/icone_milhao.png';
import Styles from '../styles/Styles';
import Botao from '../components/Botao';
import CaixaDeTexto from '../components/CaixaDeTexto';
import CaixaDeSenha from '../components/CaixaDeSenha';
import axios from 'axios';


// function Login({ navigation }) {
//     const acessatelaInicial = () => {
//         navigation.push('Inicial');
//     }
//     const acessaRegistrar = () => {
//         navigation.push('Registra');
//     }
//const acessaRecuperSenha = () => {
     // navigation.navigate('BuscaUsuario');
   //}
// }


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            nickname: '',
            score: ''
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
                            <CaixaDeTexto placeholder='Email' onChangeText={email => this.setState({ email: this.state.email = email })} />
<<<<<<< HEAD
                            <CaixaDeTexto placeholder='Senha' marginTop={20} onChangeText={password => this.setState({ password: this.state.password = password })} />
                            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('BuscaUsuario')}>
=======
                            <CaixaDeSenha placeholder='Senha' secureTextEntry={true} marginTop={20} onChangeText={password => this.setState({ password: this.state.password = password })} />
                            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('Senha')}>
>>>>>>> 88fb21804eaa75c41abc4fc2c2f73c10b058d25a
                                <Text style={{ color: 'white' }} >Esqueceu a senha?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "space-evenly", flex: 1 }}>
                            <Botao width={190} height={50} text='Login' onPress={() => {
                                if (this.state.email != '' && this.state.password != '') {
                                    axios.post('https://show-do-milhao-app.herokuapp.com/logon', {
                                        email: this.state.email,
                                        password: this.state.password,
                                    })
                                        .then(res => {
                                            console.log(res)
                                            const nickname = res.data.map(nickname => nickname.nickname)
                                            this.setState({ nickname })
                                            console.log(this.state.nickname)
                                            const score = res.data.map(score => score.score)
                                            this.setState({ score })
                                            console.log(this.state.score)
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                        })
                                        .finally(() => {
                                            if (this.state.nickname != '') {
                                                this.props.navigation.navigate('Inicial', {
                                                    nickname: this.state.nickname,
                                                    score: this.state.score
                                                })

                                            } else {
                                                Alert.alert("Erro!", 'Email ou senha incorretos')
                                            }
                                        })

                                } else {
                                    Alert.alert("Erro!", 'Preencha todos os campos')
                                }
                            }} />






                            <Botao width={190} height={50} text='Registre-se' onPress={() => this.props.navigation.navigate('Registra')} />
                        </View>
                    </ImageBackground>
                </View>
            </SafeAreaView>

        );
    }
}

export default Login;

