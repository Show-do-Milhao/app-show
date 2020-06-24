import React from "react";
import { SafeAreaView, ImageBackground, View } from "react-native";
import "react-native-gesture-handler";
import img from "../img/background_milhao.jpg";
import Botao from "../components/Botao";
import Pergunta from "../components/Pergunta";
import Alternativas from "../components/Alternativas";
import Status from "../components/Status";
import axios from "axios";
class Jogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      acertou: 10000,
      vidas: 3,
      pulos: 3,
      id: 1,
      pergunta: {
        pergunta: "",
        resposta_1: "",
        resposta_2: "",
        resposta_3: "",
        resposta_4: "",
        resposta_correta: "",
      },
      backgroundColor1: "white",
      backgroundColor2: "white",
      backgroundColor3: "white",
      backgroundColor4: "white",
      disabled: "false",
    };
  }
  pegaPergunta = (id) => {
    axios
      .post("https://show-do-milhao-app.herokuapp.com/questions", { id })
      .then((res) => {
        const [pergunta] = res.data.map((question) => ({
          pergunta: question.question,
          resposta_1: question.answer_1,
          resposta_2: question.answer_2,
          resposta_3: question.answer_3,
          resposta_4: question.answer_4,
          resposta_correta: question.answer_correct,
        }));
        console.log("Pegou com sucesso");
        this.setState({ pergunta });
      })
      .catch(function (error) {
        console.log("Miou", error);
      });
  };
  resetarBackground(backgroundName) {
    setTimeout(
      () =>
        this.setState({
          [backgroundName]: "white",
        }),
      200
    );
  }
  alternativaFoiClicada = (alternativa) => {
    const backgroundName = "backgroundColor" + alternativa;
    const novoId = this.state.id + 1;
    if (this.state.pergunta.resposta_correta == alternativa) {
      this.setState({
        [backgroundName]: "green",
        id: novoId,
        score: this.state.score + this.state.acertou,
      });
      this.resetarBackground(backgroundName);
      this.pegaPergunta(novoId);
    } else {
      this.errou();
      if (this.state.vidas <= 0) {
        this.salvaDados();
        this.props.navigation.navigate("GameOver", {
          score: this.state.score,
        });
      } else {
        this.setState({
          [backgroundName]: "red",
          id: novoId,
        });
        this.resetarBackground(backgroundName);
        this.pegaPergunta(novoId);
      }
    }
  };
  errou() {
    this.setState({ vidas: this.state.vidas - 1 });
  }
  salvaDados() {
    const data = {
      score: this.state.score,
      nickname: this.props.route.params.nickname[0],
    };
    axios.put("https://show-do-milhao-app.herokuapp.com/players", data);
  }
  componentDidMount = () => {
    this.pegaPergunta(this.state.id);
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={img} style={{ flex: 1 }}>
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Pergunta text={this.state.pergunta.pergunta} />
          </View>
          <View style={{ flex: 3, alignItems: "center" }}>
            <Alternativas
              textnumber="1"
              backgroundColor={this.state.backgroundColor1}
              text={this.state.pergunta.resposta_1}
              onPress={() => this.alternativaFoiClicada(1)}
            />
            <Alternativas
              textnumber="2"
              backgroundColor={this.state.backgroundColor2}
              text={this.state.pergunta.resposta_2}
              onPress={() => this.alternativaFoiClicada(2)}
            />
            <Alternativas
              textnumber="3"
              backgroundColor={this.state.backgroundColor3}
              text={this.state.pergunta.resposta_3}
              onPress={() => this.alternativaFoiClicada(3)}
            />
            <Alternativas
              textnumber="4"
              backgroundColor={this.state.backgroundColor4}
              text={this.state.pergunta.resposta_4}
              onPress={() => this.alternativaFoiClicada(4)}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Status text={`Vidas \n` + this.state.vidas} borderColor="red" />
            <Status
              text={`Score \n` + this.state.score}
              borderColor="#B88E44"
            />
            <Status
              text={`Acertar \n` + this.state.acertou}
              borderColor="green"
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Botao
              text="Parar"
              width={140}
              height={40}
              onPress={() => {
                this.salvaDados(),
                  this.props.navigation.navigate("FimDoJogo", {
                    score: this.state.score,
                  });
              }}
            />
            <Botao
              text={"Pulos " + this.state.pulos + "/3"}
              width={140}
              disabled={this.state.disabled}
              height={40}
              style={{ marginLeft: 100 }}
              onPress={() => {
                if (this.state.pulos > 0) {
                  this.setState({ id: this.state.id + 1 }),
                    this.pegaPergunta(),
                    this.setState({ pulos: this.state.pulos - 1 });
                } else {
                  this.setState({ disabled: (this.state.disabled = "true") });
                }
              }}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default Jogo;