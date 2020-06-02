import React from 'react';
import {SafeAreaView, View, ImageBackground, Image, Alert } from 'react-native';
import image from '../img/background_milhao.jpg'
import logo from '../img/icone_milhao.png'
import Styles from '../styles/Styles'
import Botao from '../components/Botao'
import CaixaDeSenha from '../components/CaixaDeSenha';
import axios from 'axios';

class RedefinirSenha extends React.Component {
    constructor() {
        super();
        this.state = {
            password:'',
            pass_confirmation: ''
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
                       <CaixaDeSenha placeholder='Digite a nova senha' onChangeText={password=> this.setState({password: this.state.password = password})}/>
                       <CaixaDeSenha placeholder='Confirme a nova senha' onChangeText={pass_confirmation=> this.setState({pass_confirmation: this.state.pass_confirmation = pass_confirmation})}/>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "space-around", flex: 1 }}>
                        <Botao width={200} height={55} text='Redefinir' onPress={() => {
                            if (this.state.email != '' && this.state.password != '') {
                                if(this.state.password = this.state.pass_confirmation){
                                axios.put('https://show-do-milhao-app.herokuapp.com/updateSenha', {
                                    email: this.props.route.params.email,
                                    password: this.state.password,
                                })
                                    .then(res => {
                                        console.log(res)
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    })
                                    this.props.navigation.navigate('Login')
                                }else{
                                    Alert.alert("Erro!", 'As senhas não coincidem')
                                }
                            } else {
                                Alert.alert("Erro!", 'Preencha todos os campos')
                            }
                            
                        }}/>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
 }
}
export default RedefinirSenha;
