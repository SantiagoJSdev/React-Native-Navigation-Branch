import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

// defino un tipo con mis rutas y sus argumentos
export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: {
    id: number,
    name: string
  }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false, esto es para quitarle el header
        headerStyle: {
          elevation: 0,
          // shadowColor solo para ios quitarle la raya del header
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    // esta propiedad puedo elegir con q pagina iniciar
    // initialRouteName='pagina2Screen'
    >
      <Stack.Screen name="Pagina1Screen" options={{title: 'Pagina 1'}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title: 'Pagina 2'}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title: 'Pagina 3'}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen"  component={PersonaScreen} />

    </Stack.Navigator>
  );
}