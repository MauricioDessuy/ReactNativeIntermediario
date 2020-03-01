import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Foto({ navigation }) {
    return (
        <View style={styles.body}>
            <Text>Foto</Text>
            <Button title='Voltar' onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});