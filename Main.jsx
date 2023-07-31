import { View, Text,SafeAreaView, StatusBar, Platform } from 'react-native'
// SafeAreaView is preventing the content from going behind the notch. It is a good practice to use SafeAreaView in your app. It is a component that renders content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'

const Stack = createNativeStackNavigator();

const Main = () => {
  return  (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        </Stack.Group> 
    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default Main