import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Text, View, ScrollView, FlatList, SectionList, Picker, Switch, Slider, Modal, Button, StatusBar, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    };
    AsyncStorage.getItem('nome').then((value) => {
      this.setState({nome: value});
    });
    this.setNome = this.setNome.bind(this);
  }

  setNome(nome) {
    let s = this.state;
    s.nome = nome;
    this.setState(s);
    AsyncStorage.setItem('nome', nome);
  }

  render () {

    return (
      <View style={styles.body}>
        <TextInput style={styles.input} value={this.state.nome} 
          onChangeText={(text) => this.setNome(text)} />


      </View> 
    )
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10, 
    fontSize: 16
  }
});
