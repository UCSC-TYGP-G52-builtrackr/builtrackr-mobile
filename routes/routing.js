import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { Login } from '../screens/login';
import { Signup } from '../screens/signup';
import  Home  from '../screens/Home';

const Stack = createNativeStackNavigator();


 export default function  Routes() {
  return (
<NavigationContainer>
  <Stack.Navigator
  screenOptions={{headerShown: false}}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

