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
            <KeyboardAvoidingView style={{flex:1}}>
                <ImageBackground source={image} style={{flex:1}}>
                    <View style={{flex:1}}>
                        <View style={{ alignItems: "center", justifyContent: "center", flex: 1}}>
                            <Image source={logo} style={Styles.logo} />
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "space-around", flex: 2 }}>
                            <Text style={{ fontSize: 40, color: 'white', marginBottom: 20 }}>Crie sua conta</Text>
                            <CaixaDeTexto placeholder='Nickname' onChangeText={nickname => this.setState({ nickname: this.state.nickname = nickname })} />
                            <CaixaDeTexto placeholder='E-mail' marginTop={20} onChangeText={email => this.setState({ email: this.state.email = email })} />
                            <CaixaDeTexto placeholder='Senha' marginTop={20} onChangeText={password => this.setState({ password: this.state.password = password })} />
                            <CaixaDeTexto placeholder='Confirma senha' marginTop={20} />
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "space-around", flex: 1}}>
                            {console.log(this.state.nickname),
                                console.log(this.state.email),
                                console.log(this.state.password)}
                            <Botao width={190} height={55} text='Registre-se'
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
                    
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
         
        )
    }
}

export default Registrar;
