import React from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    };
    componentDidMount() {
      axios.get()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);

      });
    }
  }
  render() {
    return (

      <SafeAreaView>
      <Text> Clique abaixo para descobrir os Pokemons solicitados{this.state.votos} </Text>
      <Button
      onPress = {() => { this.setState ({})}}
      title = 'Clique Aqui'
      />
    </SafeAreaView>
    )
  }
}
export default App