import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions'

class AdicionarContato extends Component {

  renderAdicionarContato() {
    if (!this.props.cadastro_resultado_inclusao){
      return(
        <View style={{flex: 1}}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='E-mail'
            style={styles.input}
            onChangeText={texto => this.props.modificaAdicionaContatoEmail(texto)}
            value= {this.props.adiciona_contato_email}
          />
          <Text style={styles.error}>
            {this.props.cadastro_resultado_txt_error}
          </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <Button 
            title='Adicionar'
            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)}
            color='#c769ff'
          />
        </View>
        </View>
      )
    } else {
      return(
      <View>
        <Text style={styles.msgSucesso}>
          Cadastro Realizado com Sucesso!
        </Text>
      </View>
      )
    }
  }
  render() {
    return(
      <View style={styles.container}>
        {this.renderAdicionarContato()}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  ButtonContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    fontSize: 18,
    height: 60,
    borderBottomWidth: 0.2
  },
  error: {
    fontSize: 20,
    color: '#FF0000',
    textAlign:'center',
    marginTop: 50
  },
  msgSucesso: {
    fontSize: 20,
    marginBottom: 200,
    color: 'green'
  }
})

const mapStateToProps = state => (
  {
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    cadastro_resultado_txt_error: state.AppReducer.cadastro_resultado_txt_error,
    cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao,
  }
)

export default connect(mapStateToProps, {
  modificaAdicionaContatoEmail,
  adicionaContato,
})(AdicionarContato)
