import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logar</Text>
        <Button
          title="Fazer login"
          onPress={() => navigation.navigate('Drawer')}
        />
      </View>
    );
}

export default HomeScreen;