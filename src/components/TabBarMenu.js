import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions'
import firebase from '../../Firebase'

import AdicionarContatoImg from '../images/adicionar-contato.png'

const tabBarMenu = props => (
  <View style={styles.container}>
    <StatusBar backgroundColor='#c769ff' />
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.txtTitle}>Tagarela</Text>
      </View>

      <View style={styles.sairContainer}>
        <View style={styles.image}>
          <TouchableHighlight
            onPress={() => {Actions.adicionarContato(); props.habilitaInclusaoContato() }}
            underlayColor='#c769ff'
          >
            <Image source={AdicionarContatoImg} />
          </TouchableHighlight>
        </View>
        <View style={styles.txtContainer}>
          <TouchableHighlight
            onPress={() => firebase.auth().signOut()
              .then(() => Actions.formLogin())
            }
          >
            <Text style={styles.txtSair}>Sair</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
    <TabBar { ...props } style={styles.tabBar}/>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cc87f5',
    elevation: 4,
    marginBottom: 5,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    marginLeft: 20, 
  },
  txtTitle: {
    fontSize: 20,
    color: '#fff'
  },
  tabBar: {
    backgroundColor: "#cc87f5",
    elevation: 0,
  },
  sairContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  image: {
    width: 50,
    justifyContent: "center",
    marginTop: 5,
    alignItems: 'center',
  },
  txtContainer: {
    justifyContent: "center",
  },
  txtSair: {
    fontSize: 20,
    color: '#FFF',
    justifyContent: "center"
  }
}) 

export default connect(null, {
  habilitaInclusaoContato,
})(tabBarMenu);
 