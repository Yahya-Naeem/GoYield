import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from '../../screens/signup/SignupScreen.jsx';
import Login from '../../screens/login/Login.jsx';
import WelcomeScreen from '../../screens/welcome/WelcomeScreen.jsx';
import InnerNavigator from '../innernavigator/Navigator.jsx';
import ForgetPasswordScreen from '../../screens/forgetpassword/ForgetPasswordScreen.jsx';
const Tab = createBottomTabNavigator();

export default function OuterTabs() {
  return (
        <Tab.Navigator
        screenOptions={{
          headerShown:false,
        }}
        >
          <Tab.Screen 
          component={WelcomeScreen}
          name="Welcome"
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
            component={ForgetPasswordScreen}
            options={{
              tabBarStyle: { display: "none" },
           }}
          />
          <Tab.Screen
            name="InnerNavigation"
            component={InnerNavigator}
            options={{
              tabBarStyle: { display: "none" },
           }}
          />
      </Tab.Navigator>
  );
}