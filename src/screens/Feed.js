import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default function Feed({ navigation }) {
    return (
        <View style={styles.body}>
            <Text>FEED</Text>
            <Button title="Ir para perfil" 
                onPress={() => navigation.navigate('Perfil')} />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});