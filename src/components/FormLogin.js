import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, ActivityIndicator} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component{

  _autenticarUsuario = () => {
   const { email, senha } = this.props;

   this.props.autenticarUsuario({ email, senha })
  }
  renderBtnAcessar = () => {
    if (this.props.loading_login) {
      return (
        <ActivityIndicator size='large'/>
      )
    } 
    return (
      <Button 
        title="Acessar"
        color="purple"
        onPress={() => this._autenticarUsuario()}
      />
    )
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.containerTopo}>
          <Text style={styles.title}>Tagarela</Text>
        </View>

        <View style={styles.containerForm}>
          <TextInput 
            placeholder='E-mail'
            style={styles.textInput}
            value={this.props.email}
            onChangeText={texto => this.props.modificaEmail(texto)}
          />
          <TextInput 
            placeholder='Senha'
            secureTextEntry
            style={styles.textInput}
            value={this.props.senha}
            onChangeText={texto => this.props.modificaSenha(texto)}
          />
          <TouchableHighlight onPress={() => Actions.formCadastro()}>
            <Text style={styles.textRegister}>Cadastre-se</Text>
          </TouchableHighlight>
          <Text style={styles.erroLogin}>{this.props.erroLogin}</Text>
        </View>

        <View style={styles.containerButton}>
          {this.renderBtnAcessar()}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerTopo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: 'purple'
  },
  containerForm:{
    flex: 2,
  },
  textInput: {
    fontSize: 18,
    height: 45,
    margin: 5,
    borderBottomWidth: 0.2,
  },
  textRegister: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 15,
  },
  containerButton: {
    flex: 1,
  },
  erroLogin: {
    color: '#ff0000',
    fontSize: 18,
    alignSelf: 'center',
    height: 10,
    fontWeight: "bold",
  },
})

//conecta os states desse arquivo para o state do Redux
const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loading_login: state.AutenticacaoReducer.loading_login,
  }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);