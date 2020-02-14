import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList, Picker, Switch, Slider } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 50
    };
  }

  render () {

    return (
      <View style={styles.body}>
        <Slider value={this.state.valor} 
          minimumValue={0}
          maximumValue={100} 
          onValueChange={(v) => this.setState({valor: v})}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#0000ff" />
          <Text>{this.state.valor.toFixed(0)}%</Text>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    flex: 1,
  },
});
