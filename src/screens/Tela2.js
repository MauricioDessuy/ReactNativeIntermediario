import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Tela2 extends Component {

    static navigationOptions = {
        title: 'Tela 2'
    };

    render() {
        return (
            <View style={styles.body}>
                <Text>Tela 2</Text>
                <Button title="Voltar"  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});