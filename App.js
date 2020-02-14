import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList, Picker, Switch, Slider, Modal, Button, StatusBar } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusStyle: 'dark-content',
      bgColor: '#FFFFFF'
    };
    this.alternar = this.alternar.bind(this);
  }

  alternar() {
    let s = this.state;

    if (s.statusStyle == 'dark-content') {
      s.statusStyle = 'light-content';
      s.bgColor = '#000000';
    } else {
      s.statusStyle = 'dark-content';
      s.bgColor = '#ffffff';
    }

    this.setState(s);
  }

  render () {

    return (
      <View style={[styles.body, {backgroundColor: this.state.bgColor}]}>
        <StatusBar barStyle={this.state.statusStyle} />
        <Button title="Alternar" onPress={this.alternar} />
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
});
