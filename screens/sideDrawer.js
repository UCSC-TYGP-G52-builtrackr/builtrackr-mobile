import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SupervisorDashboard } from "../screens/site_supervisor/dashboard";

const Drawer = createDrawerNavigator();
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name="SupervisorDashboard"
        component={SupervisorDashboard}
        options={{
          title: 'SupervisorDashboard',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;