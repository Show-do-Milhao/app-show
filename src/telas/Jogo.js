
import React from 'react';
import { SafeAreaView, ImageBackground, Button, View, Text, Image, TextInput } from 'react-native';

import 'react-native-gesture-handler';

import img from '../img/background_milhao.jpg';
import Botao from '../components/Botao';
import Pergunta from '../components/Pergunta';
import Alternativas from '../components/Alternativas';
import Status from '../components/Status';

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





