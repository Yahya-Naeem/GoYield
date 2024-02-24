import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignupScreen from '../../screens/signup/SignupScreen.jsx';
import Login from '../../screens/login/Login.jsx';
const Tab = createBottomTabNavigator();

export default function OuterTabs() {
  return (
        <Tab.Navigator
        screenOptions={{
          headerShown:false,
        }}
        tabBarOptions={{
          tabBarVisible: false, // Hide the tab bar for all screens
        }}
        >
              {/* <Tab.Screen
                name="Welcome"
                component={Welcome}
                options={{
                  tabBarIcon: ({ color, size,focused }) => (
                    <MaterialCommunityIcons name="circle" color={focused ? '#55BCF6' : color} size={size} />
                  ),
              }}
              /> */}
              <Tab.Screen
                name="Signin"
                component={Login}
              />
              <Tab.Screen
                name="Signup"
                component={SignupScreen}
              />
      </Tab.Navigator>
  );
}