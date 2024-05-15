import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/home/HomeScreen.jsx';
import LogoutScreen from '../../screens/logout/Logout.jsx';
const Drawer = createDrawerNavigator();
export default function HomeNavigator() {
  return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
            />
            <Drawer.Screen 
                name="Logout" 
                component={LogoutScreen} 
            />
        </Drawer.Navigator>
  );
}
