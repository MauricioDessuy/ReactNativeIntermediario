import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Text, View, ScrollView, FlatList, SectionList, Picker, Switch, Slider, Modal, Button, StatusBar, TextInput, Platform } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plataforma: Platform.OS
    };

    
  }

  render () {

    return (
      <View style={styles.body}>
        <Text style={styles.texto}>Alguma frase qualquer</Text>
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
  texto: Platform.select({
    ios: {
      fontSize: 16,
      color: '#0000ff'
    },
    android: {
      fontSize: 20,
      color: '#00ff00'
    }
  })
});
