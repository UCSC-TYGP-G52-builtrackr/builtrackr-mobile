import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TaskProof } from "../screens/site_supervisor/taskProof";
import { SupervisorDashboard } from "../screens/site_supervisor/dashboard";

const Drawer = createDrawerNavigator();
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name="Task Proof"
        component={TaskProof}
        options={{
          title: 'Task Proof',
        }}
      />
      <Drawer.Screen
        name="Supervisor Dashboard"
        component={SupervisorDashboard}
        options={{
          title: 'SupervisorDashboard',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;