import React, { Component } from 'react';
import { View, Text, FlatList, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { conversasUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Conversas extends Component {
  componentDidMount = () => {
    this.props.conversasUsuarioFetch()
  }
  render(){
    console.log("conversas: " + this.props.conversas)
    return(
      <View>
        <FlatList
          data={this.props.conversas}
          renderItem={({ item }) => 
            <TouchableHighlight
              onPress={() => Actions.conversa({title: item.nome, contatoNome : item.nome, contatoEmail : item.email })}
            >
              <View style={styles.conversas}>
                <Text style={styles.txtconversas}>{item.nome}</Text>
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
  conversas: {
    flex: 1,
    marginTop: 1.5,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#a919ff',
    padding: 20,
    borderWidth: 0.5,
    borderRadius: 10,
  },
  txtconversas: {
    fontSize: 14,
  }
})

mapStateToProps = state => {
  const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
    console.log(conversas)
    return { ...val, uid};
  });
   
  return {
    conversas,
  }
}

export default connect(mapStateToProps, {
  conversasUsuarioFetch
})(Conversas)