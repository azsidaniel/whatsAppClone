import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';

export default props => (
  <Router>
    <Stack key="root">
      <Scene key="boasVindas" component={BoasVindas} title="Bem-Vindo"/>
      <Scene key="formLogin" component={FormLogin} title="Login" initial/>
      <Scene key="formCadastro" component={FormCadastro} title="Cadastro" />
    </Stack>
  </Router>
)
