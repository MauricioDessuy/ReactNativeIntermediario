import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './Feed';
import Perfil from './Perfil';

const Stack = createStackNavigator();

export default function Home() {
  return (
      <Stack.Navigator initialRouteName="Feed" 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Feed" component={Feed} options={{ title: 'Feed' }}/>
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
  );
}