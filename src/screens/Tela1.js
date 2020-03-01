import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Tela1 extends Component {

    static navigationOptions = {
        title: 'Tela 1',
    };

    render() {
        return (
            <View style={styles.body}>
                <Text>Tela 1</Text>
                <Button title="Ir para a tela 2" />
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