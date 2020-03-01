import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Tela1 from './Tela1';
import Tela2 from './Tela2';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tela1" component={Tela1} />
      <Tab.Screen name="Tela2" component={Tela2} />
    </Tab.Navigator>
  );
}