import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/home/HomeScreen.jsx';
import SettingsScreen from '../../screens/settings/SettignsScreen.jsx';
import Login from '../../screens/login/Login.jsx';
const Drawer = createDrawerNavigator();
export default function HomeNavigator() {
  return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
            />
            <Drawer.Screen 
                name="Settings" 
                component={SettingsScreen} 
            />
            <Drawer.Screen 
                name="Logout" 
                component={Login} 
            />
        </Drawer.Navigator>
  );
}
