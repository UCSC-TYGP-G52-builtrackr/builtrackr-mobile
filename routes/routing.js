import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "../screens/login";
import { Signup } from "../screens/signup";
import { TaskProof } from "../screens/site_supervisor/taskProof";
import {CameraComponent} from "../screens/site_supervisor/camera";
import  Home  from '../screens/Home';
import DrawerNavigator from '../screens/sideDrawer';

//customer UI components
import { Sites } from '../screens/customer/Sites'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen options={{headerShown: false}}name='Supervisor Dashboard' component={DrawerNavigator}/>
      <Stack.Screen name='Task Proof' component={TaskProof} />
      <Stack.Screen name='Camera' component={CameraComponent} />
      <Stack.Screen name='Signup' component={Signup} />

      {/* customer UIS */}
      <Stack.Screen name='Sites' component={Sites} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Routes;
        
