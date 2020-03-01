import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Mosaico({ navigation }) {
    return (
        <View style={styles.body}>
            <Text>Mosaico</Text>
            <Button title='Ir para Foto' onPress={() => navigation.navigate('Foto')} />
            <Button title='Ir para Perfil' onPress={() => navigation.navigate('Perfil')} />
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