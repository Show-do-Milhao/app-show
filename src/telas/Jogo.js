import React from 'react';
import { SafeAreaView, ImageBackground, View, } from 'react-native';
import 'react-native-gesture-handler';
import img from '../img/background_milhao.jpg';
import Botao from '../components/Botao';
import Pergunta from '../components/Pergunta';
import Alternativas from '../components/Alternativas';
import Status from '../components/Status';
import axios from 'axios';

<<<<<<< HEAD
export default function Jogo({ navigation }) {
    const acessaFimJogo = () => {
        navigation.navigate('ParaFimDoJogo');
      }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ImageBackground source={img} style={{ flex: 1 }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around' }}>
                    <Pergunta text='O QUE É A VIA LÁCTEA? ' />
                </View>
                <View style={{ flex: 3, alignItems: 'center', }}>
                    <Alternativas textnumber='1' text='Marca de Leite' />
                    <Alternativas textnumber='2' text='Civilização Antiga' />
                    <Alternativas textnumber='3' text='Carro' />
                    <Alternativas textnumber='4' text='Galaxia' />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft : 20, marginRight : 20}}>
                    <Status text={`Errar \n-500`}/>
                    <Status text={`Score \n500`}/>
                    <Status text={`Acertar \n1000`}/>

                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                    <Botao text='Parar' width={140} height={40} onPress={acessaFimJogo}/>
                    <Botao text='Pular 1/3' width={140} height={40} style={{ marginLeft: 100 }} />

                </View>
            </ImageBackground>
        </SafeAreaView>

    );
}
=======
class Jogo extends React.Component {
    constructor() {
        super();
        this.state = {
            nickname: '',
            score: 0,
            pulos: 3,
            chances: 0,
            id: 1,
            pergunta: '',
            resposta_1: '',
            resposta_2: '',
            resposta_3: '',
            resposta_4: '',
            resposta_correta: '',
            backgroundColor1:'white',
            backgroundColor2:'white',
            backgroundColor3:'white',
            backgroundColor4:'white'

        }
    }

    pegaPergunta = () => {
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
>>>>>>> 04c612ccce3f89bbcd06a3b6e5bbf5beccb1d3c5

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

    componentDidMount = () => {
        this.pegaPergunta()
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
                                this.setState({backgroundColor1: this.state.backgroundColor1 = 'green'})
                                this.setState({ id: this.state.id + 1 }),
                                this.pegaPergunta()
                                this.setState({backgroundColor1: this.state.backgroundColor1 = 'white'})
                            }

                        }} />
                        <Alternativas textnumber='2' backgroundColor={this.state.backgroundColor} text={this.state.resposta_2} />
                        <Alternativas textnumber='3' backgroundColor={this.state.backgroundColor} text={this.state.resposta_3} />
                        <Alternativas textnumber='4' backgroundColor={this.state.backgroundColor} text={this.state.resposta_4} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                        <Status text={`Errar \n-500`} />
                        <Status text={`Score \n500`} />
                        <Status text={`Acertar \n1000`} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
                        <Botao text='Parar' width={140} height={40} />
                        <Botao text={'Pulos ' + this.state.pulos + '/3'} width={140} height={40} style={{ marginLeft: 100 }} onPress={() => { this.setState({ id: this.state.id + 1 }), this.pegaPergunta(), this.setState({ pulos: this.state.pulos - 1 }) }} />

                    </View>
                </ImageBackground>
            </SafeAreaView>

        )
    }
}
export default Jogo;



