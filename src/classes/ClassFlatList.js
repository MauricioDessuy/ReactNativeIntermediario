import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatData: [
        {key: "1", nome: 'Mauricio', idade: 22, type: 'foto'},
        {key: "2", nome: 'Murilo', idade: 15, type: 'video'},
        {key: '3', nome: 'Márcia', idade: 40, type: 'text'},
        {key: '4', nome: 'Marcelo', idade: 52, type: 'video'},
      ]
    };
  }

  flatRender(item) {
    return (
      <View style={styles.flatItem}>
        <Text style={styles.flatNome}>{item.type} - {item.nome}</Text>
        <Text style={styles.flatIdade}>{item.idade}</Text>
      </View>
    );
  }

  render () {
    return (
      <View style={styles.body}>
        <FlatList data={this.state.flatData} renderItem={({item}) => this.flatRender(item)} />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1
  },
  flatList: {
    
  },
  flatNome: {
    fontSize: 26,
  },
  flatIdade: {
    fontSize: 14
  },
  flatItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black'
  }
});
