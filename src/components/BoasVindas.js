import React from 'react';
import {View, Image, Button, StyleSheet, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../images/logo.png')

export default props => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Text style={styles.text}>Seja Bem-Vindo</Text>
      <Image style={styles.image} source={logo}/>
    </View>
    <View style={styles.buttonContainer}>
      <Button title="Fazer login" onPress={() => Actions.formLogin()} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    fontSize: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
  },
  logoContainer: {
    flex: 2,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    padding: 15,
  }
})