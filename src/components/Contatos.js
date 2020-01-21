import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight  } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions'
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Contatos extends Component{

  componentDidMount() {
    this.props.contatosUsuarioFetch();
  }

  render(){
    return(
        <View>
          <FlatList
            data={this.props.contatos}
            renderItem={({ item }) => 
              <TouchableHighlight
                onPress={() => Actions.conversa({title: item.nome, contatoNome : item.nome, contatoEmail : item.email })}
              >
                <View style={styles.contatos}>
                  <Text style={styles.txtContatos}>{item.nome}</Text>
                </View>
              </TouchableHighlight>
            }
            keyExtractor={item => item.uid}
          />
        </View>
    )
  }
};

const styles = StyleSheet.create({
  contatos: {
    flex: 1,
    marginTop: 1.5,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#a919ff',
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  txtContatos: {
    fontSize: 14,
  }
})


mapStateToProps = state => {
  const contatos = _.map(state.ListaContatoReducer, (val, uid) => {
    return { ...val, uid} //uid é o ID de cada um, val é o valor
  })

  return { contatos }
}

export default connect(mapStateToProps, {
  contatosUsuarioFetch
})(Contatos);