import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Text, View, ScrollView, FlatList, SectionList, Picker, Switch, Slider, Modal, Button, StatusBar, TextInput, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';

const AppNavigator = createStackNavigator({
  Tela1: {
    screen: Tela1,
  },
  Tela2: {
    screen: Tela2,
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#ff0000',
      height: 100
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 40
    }
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;