import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import TelaInicial from './src/telas/TelaInicial';
import TelaPerfil from './src/telas/TelaPerfil';
import Login from './src/telas/Login';
import BuscaUsuario from './src/telas/BuscaUsuario';
import Registrar from './src/telas/Registrar';
import Registrado from './src/telas/Registrado';
import LinkSenha from './src/telas/LinkSenha';
import Ranking from './src/telas/Ranking'
import Jogo from './src/telas/Jogo';

const Stack = createStackNavigator()


function AppAsTelas() {
  return (
  
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
         <Stack.Screen  name="Login" component={Login}  options={{ headerShown: false}}/>
         <Stack.Screen  name="Inicial" component={TelaInicial} options={{ headerShown: false}}/>
         <Stack.Screen  name="Perfil" component={TelaPerfil} options={{ headerShown: false}}/>
         <Stack.Screen  name="Usuario" component={BuscaUsuario} options={{ headerShown: false}}/>
         <Stack.Screen  name="Registra" component={Registrar} options={{ headerShown: false}}/>
         <Stack.Screen  name="SeRegistro" component={Registrado} options={{ headerShown: false}}/>
         <Stack.Screen  name="VoltaAoLogin" component={Login} options={{ headerShown: false}}/>
         <Stack.Screen  name="Senha" component={LinkSenha} options={{ headerShown: false}}/>
         <Stack.Screen  name="SeuRanking" component={Ranking} options={{ headerShown: false}}/>
         <Stack.Screen  name="VoltaPerfil" component={TelaInicial} options={{ headerShown: false}}/>
         <Stack.Screen  name="VoltaLogin" component={Login} options={{ headerShown: false}}/>
         <Stack.Screen  name="VamosJogo" component={Jogo} options={{ headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>
   
);
}
export default AppAsTelas;