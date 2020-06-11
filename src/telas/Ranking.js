import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, View } from 'react-native';
import img from '../img/background_milhao.jpg';
import Botao from '../components/Botao';
import ScoreFinal from '../components/ScoreFinal';
import axios from 'axios';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

// PegaPergunta = () => {
//   axios.post('https://show-do-milhao-app.herokuapp.com/questions', {
//       id: this.state.id,
//   })
//       .then(res => {
//           console.log(res)

//           const perguntas = res.data.map(question => question.question)
//           this.setState({ perguntas })
//           console.log(this.state.perguntas)

//           const resposta_1 = res.data.map(answer_1 => answer_1.answer_1)
//           this.setState({ resposta_1 })
//           console.log(this.state.resposta_1)

//           const resposta_2 = res.data.map(answer_2 => answer_2.answer_2)
//           this.setState({ resposta_2 })
//           console.log(this.state.resposta_2)

//           const resposta_3 = res.data.map(answer_3 => answer_3.answer_3)
//           this.setState({ resposta_3 })
//           console.log(this.state.resposta_3)

//           const resposta_4 = res.data.map(answer_4 => answer_4.answer_4)
//           this.setState({ resposta_4 })
//           console.log(this.state.resposta_4)

//           const resposta_correta = res.data.map(answer_correct => answer_correct.answer_correct)
//           this.setState({ resposta_correta })
//           console.log(this.state.resposta_correta)
//       })
//       .catch(function (error) {
//           console.log(error);
//       })
// }

export default function Ranking({ navigation }) {
  const [ranking, setRank] = useState([])

  axios.get('https://show-do-milhao-app.herokuapp.com/ranking')
    .then(res => {
      const ranking = res.data.map(player => ({ nick: player.nickname , score: player.score}))
      setRank(ranking)
    })
    .catch(function (error) {
      console.log(error)
    })
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ImageBackground source={img} style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>

            {ranking.map(player => (<ScoreFinal text={player.nick + `\n` + player.score} />))}

          </View>
          <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'space-around' }}>
            <Botao text='Ir para tela inicial' width={250} height={55} onPress={() => { navigation.navigate("Inicial") }} />
            <Botao text='Sair' width={190} height={55} onPress={() => { navigation.navigate("Login") }} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>

  );
}

