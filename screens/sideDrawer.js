import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SupervisorDashboard } from "../screens/site_supervisor/dashboard";
import { ToolInventory } from "../screens/site_supervisor/toolInventory";

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
      <Drawer.Screen
        name="Tools"
        component={ToolInventory}
        options={{
          title: 'Tools',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;