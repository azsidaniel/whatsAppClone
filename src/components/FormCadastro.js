import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import { 
  modificaEmail, 
  modificaSenha, 
  modificaNome, 
  cadastraUsuario 
} from '../actions/AutenticacaoActions';

class formCadastro extends Component {


  _cadastraUsuario(){
    const { nome, email, senha } = this.props;

    this.props.cadastraUsuario({ nome, email, senha });
  }

  render(){
    return (
      <View style={styles.container}>
      <View style={styles.containerForm}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Nome"
          value={this.props.nome}
          onChangeText={texto => this.props.modificaNome(texto)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="E-mail"
          value={this.props.email}
          onChangeText={texto => this.props.modificaEmail(texto)}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Senha"
          value={this.props.senha}
          onChangeText={texto => this.props.modificaSenha(texto)}
        />
        <Text style={styles.erroCadastro} >{this.props.erroCadastro}</Text>
      </View>
      <View style={styles.containerButton}>
        <Button 
          title="Cadastrar"
          color="#50a358"
          onPress={() => this._cadastraUsuario()} />
      </View>
    </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerForm:{
    flex: 4,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    height: 45,
    margin: 5,
    borderBottomWidth: 0.2,
  },
  containerButton: {
    flex: 1,
  },
  erroCadastro: {
    color: '#ff0000',
    fontSize: 18,
    alignSelf: 'center',
    height: 50,
    fontWeight: "bold",
  },
})

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
  }
)

export default connect(mapStateToProps, { 
  modificaEmail, 
  modificaSenha, 
  modificaNome,
  cadastraUsuario 
})(formCadastro);
