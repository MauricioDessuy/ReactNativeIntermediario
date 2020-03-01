import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Mosaico from './Mosaico';
import Perfil from './Perfil';
import Foto from './Foto';

const Stack = createStackNavigator();

export default function Explore() {
    return (
        <Stack.Navigator initialRouteName="Mosaico" 
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Mosaico" component={Mosaico} options={{ title: 'Mosaico' }}/>
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Foto" component={Foto} />
        </Stack.Navigator>
    );
}