import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './Feed';
import Perfil from './Perfil';

const Stack = createStackNavigator();

export default function Home() {
  return (
      <Stack.Navigator initialRouteName="Feed" 
        headerMode='float'
         >
        <Stack.Screen name="Feed" component={Feed} options={{ 
          title: 'Feed',
        }}/>
        <Stack.Screen name="Perfil" component={Perfil} 
          options={{
              headerBackImage: () => (
                <View style={{width: 30, height: 30, backgroundColor: 'red'}}>
  
                </View>
              ),
              headerRight: () => (
                <View style={{width: 30, height: 30, backgroundColor: 'green', marginRight: 20}}></View>
              )
          }}
          />
      </Stack.Navigator>
  );
}