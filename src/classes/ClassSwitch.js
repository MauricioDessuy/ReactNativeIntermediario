import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList, Picker, Switch } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: false
    };
  }

  render () {

    return (
      <View style={styles.body}>
        <Switch value={this.state.valor} 
          onValueChange={(v) => this.setState({valor: v})}
          thumbColor="#0000ff"
          onTintColor="#ff0000"/>
          <Text>{this.state.valor ? "Selecionado" : 'Não selecionado'}</Text>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 25,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
});
