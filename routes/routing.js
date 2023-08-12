import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../screens/login";
import { Signup } from "../screens/signup";
import { SupervisorDashboard } from "../screens/site_supervisor/dashboard";
import { TaskProof } from "../screens/site_supervisor/taskProof";
import {CameraComponent} from "../screens/site_supervisor/camera";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return(
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Supervisor Dashboard' component={SupervisorDashboard}/>
        <Stack.Screen name='Task Proof' component={TaskProof} />
        <Stack.Screen name='Camera' component={CameraComponent} />
        <Stack.Screen name='Signup' component={Signup} />
      </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
        
