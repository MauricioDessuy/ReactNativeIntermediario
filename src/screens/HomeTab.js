import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Home from './Home';
import Explore from './Explore';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator initialRouteName='Home' 
      tabBarOptions={{
        activeTintColor: '#e91e63',
        showIcon: true,
        showLabel: true,
        inactiveTintColor: '#00FF00',
        tabStyle: {
          backgroundColor: '#ffff00',
        },
        
      }} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
}