import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import image from '../img/background_milhao.jpg';
import logo from '../img/icone_milhao.png';
import Styles from '../styles/Styles';
import Botao from '../components/Botao';
import CaixaDeTexto from '../components/CaixaDeTexto';
import CaixaDeSenha from '../components/CaixaDeSenha';
import axios from 'axios';
import { connect } from 'react-redux';



class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            nickname: '',
            score: 0
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
                            <CaixaDeTexto value={this.state.email} placeholder='Email' onChangeText={email => this.setState({ email: this.state.email = email })} />
                            <CaixaDeSenha value={this.state.password} placeholder='Senha' secureTextEntry={true} marginTop={20} onChangeText={password => this.setState({ password: this.state.password = password })} />
                            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('BuscaUsuario')}>
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

                                            const nickname = res.data.map(nickname => nickname.nickname)
                                            this.setState({ nickname })
                                            const score = res.data.map(score => score.score)
                                            this.setState({ score })


                                            this.props.dispatch({ type: 'UPDATE_USER', user: { nickname, score } })
                                        })

                                        .catch(function (error) {
                                        })

                                        .finally(() => {
                                            if (this.state.nickname != '') {
                                                this.props.navigation.navigate('Inicial', {
                                                    nickname: this.state.nickname,
                                                    score: this.state.score,
                                                    email: this.setState({ email: '' }),
                                                    password: this.setState({ password: '' })
                                                })
                                            } else {
                                                Alert.alert("Erro!", 'Email ou senha incorretos')
                                                this.setState({password: '' })
                                            }
                                        })
                                } else {
                                    Alert.alert("Erro!", 'Preencha todos os campos')
                                    this.setState({password: '' })
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
const mapStoreToProps = ({ user }) => {
    return { user }
}

export default connect(mapStoreToProps)(Login);