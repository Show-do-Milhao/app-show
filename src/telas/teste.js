import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { SafeAreaView, Text, Button, View, TextInput, StatusBar } from 'react-native'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

class UserRanking extends React.Component {
  constructor() {
    super();
    this.state = {
      ranking: []
    }
  }
  sapinho() {
    axios.get('https://pokeapi.co/api/v2/type/13')
      .then(res => {
        const ranking = res.data.pokemon.map(usernames => ({ nomes: usernames.pokemon.name }))
        this.setState({ ranking })
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Button
            title='Pesquise os pokes de tipo eletrico'
            onPress={() => this.sapinho()}
          />
          <View style={{alignItems:"center"}}>
          {this.state.ranking.map(pokemon => (<Text> {pokemon.nomes.toUpperCase()} </Text>))}
          </View>
