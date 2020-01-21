import { combineReducers } from 'redux';

import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListaContatoReducer from '../reducers/ListaContatoReducer';
import ListaConversaReducer from './ListaConversaReducer';
import ListaConversasReducer from './ListaConversasReducer';

export default combineReducers({
  AutenticacaoReducer: AutenticacaoReducer,
  AppReducer: AppReducer,
  ListaContatoReducer: ListaContatoReducer,
  ListaConversaReducer : ListaConversaReducer,
  ListaConversasReducer: ListaConversasReducer
});