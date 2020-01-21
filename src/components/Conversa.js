import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableHighlight, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

import enviarMensagem from '../images/enviar_mensagem.png'

class Conversa extends Component {

  _enviaMensagem = () => {
    const { mensagem, contatoNome, contatoEmail } = this.props;

    this.props.enviaMensagem(mensagem, contatoNome, contatoEmail)
  }

  componentDidMount() {
    this.props.conversaUsuarioFetch(this.props.contatoEmail)
  }

  renderMessages = (texto) => {
    if (texto.tipo === 'e') {
      return(
        <View style={style.mensagemEnviadaContainer}>
          <Text style={style.txtMensagemEnviada}>{texto.mensagem}</Text>
        </View>
      )
    }
    return(
      <View style={style.mensagemRecebidaContainer}>
        <Text style={style.txtMensagemRecebida}>{texto.mensagem}</Text>
      </View>
    )
  }

  render() {
    return(
      <View style={style.container}>
        <View style={style.conversaContainer}>
          <FlatList
            data={this.props.conversa}
            renderItem={({ item }) =>              
              this.renderMessages(item)
            }
            keyExtractor={item => item.uid}
          />
        </View>
        <View style={style.mensagemContainer}>
          <TextInput
          style={style.input}
          value={this.props.mensagem}
          onChangeText={(texto) => this.props.modificaMensagem(texto)}
          placeholder="Digite sua mensagem "
          />
          <TouchableHighlight
            onPress={() => this._enviaMensagem(this.props.mensagem)}
            underlayColor='#eee4dc'
          >
            <Image source={enviarMensagem}/>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#eee4dc',
    padding: 10,
  },
  conversaContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  mensagemContainer:{
    height: 60,
    flexDirection: 'row',
  },
  input: {
    flex: 4,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 20,
    marginRight: 5,
    paddingLeft: 20,
  },
  mensagemEnviadaContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 40,
  },
  txtMensagemEnviada: {
    fontSize: 16,
    color: '#000',
    padding: 10,
    backgroundColor: '#f5deff',
    elevation: 1,
    borderRadius: 10,
  },
  txtMensagemRecebida: {
    fontSize: 16,
    color: '#000',
    padding: 10,
    backgroundColor: '#f6e8fc',
    elevation: 1,
    borderRadius: 10,
  },
  mensagemRecebidaContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    marginRight: 40,
  },
})

mapStateToProps = state => {
  const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
    return { ...val, uid};
  });
   
  return ({
    conversa,
    mensagem: state.AppReducer.mensagem,
  })
}

export default connect(mapStateToProps, { 
  modificaMensagem, 
  enviaMensagem, 
  conversaUsuarioFetch 
})(Conversa)