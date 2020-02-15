import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {title: 'A', data: [
          {key: "1", nome: 'A Maurício', idade: 22}
        ]},
        {title: 'C', data: [
          {key: "2", nome: 'Claudio', idade: 23},
          {key: "3", nome: 'Claudionei', idade: 24},
          {key: "4", nome: 'Cleber', idade: 25},
        ]},
        {title: 'D', data: [
          {key: "5", nome: 'Dantas', idade: 26},
          {key: "6", nome: 'Dober', idade: 27},
          {key: "7", nome: 'Daniel', idade: 28},
        ]},
      ]
    };
  }

  listSectionRender(section) {
    return (
      <Text style={styles.section}>Letra {section.title}</Text>
    );
  }

  listRender(item) {
    return (
      <Text style={styles.item}>{item.nome} - {item.idade} anos.</Text>
    );
  }

  render () {
    return (
      <View style={styles.body}>
        <SectionList sections={this.state.listData} 
          renderItem={({item}) => this.listRender(item)} 
          renderSectionHeader={({section}) => this.listSectionRender(section)}/>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 20,
    flex: 1
  },
  item: {
    fontSize: 18,
    height: 40,
    padding: 10
  },
  section: {
    fontSize: 14,
    backgroundColor: '#cccccc',
    padding: 10
  }
});
