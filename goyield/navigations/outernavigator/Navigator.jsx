import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from '../../screens/signup/SignupScreen.jsx';
import Login from '../../screens/login/Login.jsx';
import WelcomeScreen from '../../screens/welcome/WelcomeScreen.jsx';
import ForgotPassword from '../../components/forgotpassword/ForgotPassword.jsx';
import InnerNavigator from '../innernavigator/Navigator.jsx';
const Tab = createBottomTabNavigator();

export default function OuterTabs() {
  return (
        <Tab.Navigator
        screenOptions={{
          headerShown:false,
        }}
        >
          <Tab.Screen 
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarStyle: { display: "none" },
          }}
          />
          <Tab.Screen
            name="Signin"
            component={Login}
            options={{
              tabBarStyle: { display: "none" },
           }}
          />
          <Tab.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              tabBarStyle: { display: "none" },
           }}
          />
          <Tab.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              tabBarStyle: { display: "none" },
           }}
          />
          <Tab.Screen 
          name={'InnerNavigator'}
          component={InnerNavigator}
          />
      </Tab.Navigator>
  );
}