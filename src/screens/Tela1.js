import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Tela1 extends Component {

    static navigationOptions = {
        title: 'Tela 1',
    };

    render() {
        return (
            <View>
                <Text>Tela 1</Text>
                <Button title="Ir para a tela 2" onPress={() => this.props.navigation.navigate('Tela2', {nome: 'Mauricio', idade: 22})} />
            </View>
        );
    }
}