import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import image from '../img/background_milhao.jpg'
import logo from '../img/icone_milhao.png'
import Styles from '../styles/Styles'
import Botao from '../components/Botao'
import CaixaDeTexto from '../components/CaixaDeTexto';
import axios from 'axios';


// const acessaSeRegistro = () => {
//     this.props.navigation.navigate('SeRegistro');
// }

class Registrar extends React.Component {
    constructor() {
        super();
        this.state = {
            nickname: '',
            email: '',
            password: '',
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={Styles.container}>
                    <ImageBackground source={image} style={Styles.background}>
                        <ScrollView>    
                        <View style={{ alignItems: "center", justifyContent: "center", height:180}}>
                            <Image source={logo} style={Styles.logo} />
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "flex-end", flex: 3 }}>
                            <Text style={{ fontSize: 40, color: 'white', marginBottom: 20 }}>Crie sua conta</Text>
                            <CaixaDeTexto placeholder='Nickname' onChangeText={nickname => this.setState({ nickname: this.state.nickname = nickname })} />
                            <CaixaDeTexto placeholder='E-mail' marginTop={20} onChangeText={email => this.setState({ email: this.state.email = email })} />
                            <CaixaDeTexto placeholder='Senha' marginTop={20} onChangeText={password => this.setState({ password: this.state.password = password })} />
                            <CaixaDeTexto placeholder='Confirma senha' marginTop={20} />
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <Botao width={190} height={55} text='Registrar'
                                onPress={() =>
                                    axios.post('http://10.0.2.2:3333/players', {
                                        nickname: this.state.nickname,
                                        email: this.state.email,
                                        password: this.state.password,

                                    })
                                        .then(function (response) {
                                            console.log(response);

                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                        })


                                    //this.props.navigation.navigate('SeRegistro')
                                } />
                        </View>
                    </ScrollView>
                    </ImageBackground>
                </View>
            </SafeAreaView>

        )
    }
}

export default Registrar;
