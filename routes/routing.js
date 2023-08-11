import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../screens/login";
import { Signup } from "../screens/signup";
import { SupervisorDashboard } from "../screens/site_supervisor/dashboard";
import { TaskProof } from "../screens/site_supervisor/taskProof";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Task Proof' component={TaskProof} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Supervisor Dashboard' component={SupervisorDashboard}/>
        <Stack.Screen name='Signup' component={Signup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
