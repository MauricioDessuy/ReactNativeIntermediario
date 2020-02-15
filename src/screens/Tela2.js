import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Tela2 extends Component {

    static navigationOptions = {
        title: 'Tela 2'
    };

    render() {
        return (
            <View>
                <Text>Tela 2</Text>
                <Text>Nome: {this.props.navigation.getParam('nome', 'Não informado')}</Text>
                <Text>Idade: {this.props.navigation.getParam('idade', 'Náo informada')}</Text>
                <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}