import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions'

class Contatos extends Component{

  componentDidMount() {
    this.props.contatosUsuarioFetch();
  }

  render(){
    return(
      <View>
        <Text>Contatos</Text>
      </View>
    )
  }
};

export default connect(null, {
  contatosUsuarioFetch
})(Contatos);