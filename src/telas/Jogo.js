import React from 'react';
import { SafeAreaView, ImageBackground, View, } from 'react-native';
import 'react-native-gesture-handler';
import img from '../img/background_milhao.jpg';
import Botao from '../components/Botao';
import Pergunta from '../components/Pergunta';
import Alternativas from '../components/Alternativas';
import Status from '../components/Status';
import axios from 'axios';

{ var nomeDoPlayer }

class Jogo extends React.Component {
    constructor() {
        super();
        this.state = {
            nickname: '',
            score: 0,
            acertou: 10000,
            vidas: 3,
            pulos: 3,
            id: 1,
            pergunta: '',
            resposta_1: '',
            resposta_2: '',
            resposta_3: '',
            resposta_4: '',
            resposta_correta: '',
            backgroundColor1: 'white',
            backgroundColor2: 'white',
            backgroundColor3: 'white',
            backgroundColor4: 'white',
            disabled: 'false'
        }
    }

    PegaPergunta = () => {
        axios.post('https://show-do-milhao-app.herokuapp.com/questions', {
            id: this.state.id,
        })
            .then(res => {
                console.log(res)

                const perguntas = res.data.map(question => question.question)
                this.setState({ perguntas })
                console.log(this.state.perguntas)

                const resposta_1 = res.data.map(answer_1 => answer_1.answer_1)
                this.setState({ resposta_1 })
                console.log(this.state.resposta_1)

                const resposta_2 = res.data.map(answer_2 => answer_2.answer_2)
                this.setState({ resposta_2 })
                console.log(this.state.resposta_2)

                const resposta_3 = res.data.map(answer_3 => answer_3.answer_3)
                this.setState({ resposta_3 })
                console.log(this.state.resposta_3)

                const resposta_4 = res.data.map(answer_4 => answer_4.answer_4)
                this.setState({ resposta_4 })
                console.log(this.state.resposta_4)

                const resposta_correta = res.data.map(answer_correct => answer_correct.answer_correct)
                this.setState({ resposta_correta })
                console.log(this.state.resposta_correta)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    Acertou() {
        this.setState({ score: this.state.score + this.state.acertou })
    }
    Errou() {
        this.setState({ vidas: this.state.vidas - 1 })
    }
    SalvaDados() {
        axios.put('https://show-do-milhao-app.herokuapp.com/players', {
            score: this.state.score,
            nickname: this.state.nickname[0],
        })
        this.props.navigation.navigate('ParaFimDoJogo', {
            score: this.state.score
        })
    }
    componentDidMount = () => {
        this.PegaPergunta()
        this.setState({ nickname: this.state.nickname = this.props.route.params.nickname })

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ImageBackground source={img} style={{ flex: 1 }}>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around' }}>
                        <Pergunta text={this.state.perguntas} />
                    </View>
                    <View style={{ flex: 3, alignItems: 'center', }}>
                        <Alternativas textnumber='1' backgroundColor={this.state.backgroundColor1} text={this.state.resposta_1} onPress={() => {
                                if (this.state.resposta_correta == 1) {
                                    this.setState({ backgroundColor1: this.state.backgroundColor1 = 'green' })
                                    this.cor = setInterval(() => this.setState({ backgroundColor1: this.state.backgroundColor1 = 'white' }), 1500);
                                    this.setState({ id: this.state.id + 1 })
                                    this.PegaPergunta()
                                    this.Acertou()
                                } else {
                                    this.Errou()
                                    if (this.state.vidas <= 0) {
                                        this.SalvaDados()
                                    } else {
                                        this.setState({ backgroundColor1: this.state.backgroundColor1 = 'red' })
                                        this.cor = setInterval(() => this.setState({ backgroundColor1: this.state.backgroundColor1 = 'white' }), 1500);
                                        this.setState({ id: this.state.id + 1 })
                                        this.PegaPergunta()
                                    }
                                }
                        }} />
                        <Alternativas textnumber='2' backgroundColor={this.state.backgroundColor2} text={this.state.resposta_2} onPress={() => {
                            if (this.state.resposta_correta == 2) {
                                this.setState({ backgroundColor2: this.state.backgroundColor2 = 'green' })
                                this.cor = setInterval(() => this.setState({ backgroundColor2: this.state.backgroundColor2 = 'white' }), 1500);
                                this.setState({ id: this.state.id + 1 }),
                                    this.PegaPergunta()
                                this.Acertou()
                            } else {
                                this.Errou()
                                if (this.state.vidas <= 0) {
                                    this.SalvaDados()
                                } else {
                                    this.setState({ backgroundColor2: this.state.backgroundColor2 = 'red' })
                                    this.cor = setInterval(() => this.setState({ backgroundColor2: this.state.backgroundColor2 = 'white' }), 1500);
                                    this.setState({ id: this.state.id + 1 })
                                    this.PegaPergunta()
                                }
                            }
                        }} />
                        <Alternativas textnumber='3' backgroundColor={this.state.backgroundColor3} text={this.state.resposta_3} onPress={() => {
                            if (this.state.resposta_correta == 3) {
                                this.setState({ backgroundColor3: this.state.backgroundColor3 = 'green' })
                                this.cor = setInterval(() => this.setState({ backgroundColor3: this.state.backgroundColor3 = 'white' }), 1500);
                                this.setState({ id: this.state.id + 1 }),
                                    this.PegaPergunta()
                                this.Acertou()
                            } else {
                                this.Errou()
                                if (this.state.vidas <= 0) {
                                    this.SalvaDados()
                                } else {
                                    this.setState({ backgroundColor3: this.state.backgroundColor3 = 'red' })
                                    this.cor = setInterval(() => this.setState({ backgroundColor3: this.state.backgroundColor3 = 'white' }), 1500);
                                    this.setState({ id: this.state.id + 1 })
                                    this.PegaPergunta()
                                }
                            }
                        }} />
                        <Alternativas textnumber='4' backgroundColor={this.state.backgroundColor4} text={this.state.resposta_4} onPress={() => {
                            if (this.state.resposta_correta == 4) {
                                this.setState({ backgroundColor4: this.state.backgroundColor4 = 'green' })
                                this.cor = setInterval(() => this.setState({ backgroundColor4: this.state.backgroundColor4 = 'white' }), 1500);
                                this.setState({ id: this.state.id + 1 }),
                                    this.PegaPergunta()
                                this.Acertou()
                            } else {
                                this.Errou()
                                if (this.state.vidas <= 0) {
                                    this.SalvaDados()
                                } else {
                                    this.setState({ backgroundColor4: this.state.backgroundColor4 = 'red' })
                                    this.cor = setInterval(() => this.setState({ backgroundColor4: this.state.backgroundColor4 = 'white' }), 1500);
                                    this.setState({ id: this.state.id + 1 })
                                    this.PegaPergunta()
                                }
                            }
                        }} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                        <Status text={`Vidas \n` + this.state.vidas} borderColor='red' />
                        <Status text={`Score \n` + this.state.score} borderColor='#B88E44' />
                        <Status text={`Acertar \n` + this.state.acertou} borderColor='green' />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                        <Botao text='Parar' width={140} height={40} onPress={() => this.props.navigation.navigate('Inicial')} />
                        <Botao text={'Pulos ' + this.state.pulos + '/3'} width={140} disabled={this.state.disabled} height={40} style={{ marginLeft: 100 }} onPress={() => {
                            if (this.state.pulos > 0) {
                                this.setState({ id: this.state.id + 1 }),
                                    this.PegaPergunta(),
                                    this.setState({ pulos: this.state.pulos - 1 })
                            } else {
                                this.setState({ disabled: this.state.disabled = 'true' })
                            }
                        }} />
                    </View>
                </ImageBackground>
            </SafeAreaView>

        )
    }
}
export default Jogo;




