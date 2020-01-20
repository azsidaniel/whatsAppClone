import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListaContatoReducer from '../reducers/ListaContatoReducer';

export default combineReducers({
  AutenticacaoReducer: AutenticacaoReducer,
  AppReducer: AppReducer,
  ListaContatoReducer: ListaContatoReducer
});