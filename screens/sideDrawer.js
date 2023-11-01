import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SupervisorDashboard } from "../screens/site_supervisor/dashboard";
import { ToolInventory } from "../screens/site_supervisor/toolInventory";
import { Login } from "./login";

const Drawer = createDrawerNavigator();
const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name="SupervisorDashboard"
        component={SupervisorDashboard}
        options={{
          title: 'Supervisor Dashboard',
        }}
      />
      <Drawer.Screen
        name="Tools"
        component={ToolInventory}
        options={{
          title: 'Tools',
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Login}
        options={{
          title: 'Logout',
          headerShown: false
        }
    }
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;