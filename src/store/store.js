import {createStore} from 'redux'
import atualizaUsuario from '../reducers/atualizaUsuario.js'


export let store=createStore(atualizaUsuario)