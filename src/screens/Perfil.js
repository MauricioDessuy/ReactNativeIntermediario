import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Perfil({ navigation }) {
    return (
        <View style={styles.body}>
            <Text>Perfil</Text>
            <Button title='Voltar' 
                onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})