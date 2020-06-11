import React from 'react';
import { SafeAreaView, ImageBackground, View, Text, Image, TextInput } from 'react-native';
import img from '../img/background_milhao.jpg';
import Botao from '../components/Botao';
import styles from '../styles/Styles';
import { connect } from 'react-redux';

const usuarios = { uri: 'https://http2.mlstatic.com/mascara-la-casa-de-papel-top-D_NQ_NP_667175-MLB28219066519_092018-F.jpg' }

function TelaPerfil({ user, route, navigation }) {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={img} style={{ flex: 1 }}>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'space-around' }}>
          <Image source={usuarios} style={styles.foto}></Image>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{user.nickname}</Text>
        </View>
        <View style={{ flex: 2.4, alignItems: 'center', justifyContent: 'space-around' }}>
          <TextInput
          />
        </View>

        <View style={{ flex: 1.6, alignItems: 'center', justifyContent: 'space-around' }}>
          <Botao text='Trocar de nick' width={190} height={56} />
          <Botao text='Voltar' onPress={() => { navigation.navigate("Inicial") }} width={190} height={56} />
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}
const mapStoreToProps = (store) => {
  return { user: store.user }
}

export default connect(mapStoreToProps)(TelaPerfil)
