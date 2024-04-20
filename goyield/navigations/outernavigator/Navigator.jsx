import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignupScreen from '../../screens/signup/SignupScreen.jsx';
import Login from '../../screens/login/Login.jsx';
import WelcomeScreen from '../../screens/welcome/WelcomeScreen.jsx';
import ForgotPassword from '../../components/forgotpassword/ForgotPassword.jsx';
import HomeScreen from '../../screens/home/HomeScreen.jsx';
import InnerNavigator from '../innernavigator/Navigator.jsx';
const Tab = createBottomTabNavigator();
import ScheduleCrops from '../../screens/schedulecrops/ScheduleCropsScreen.jsx';

export default function OuterTabs() {
  return (
        <Tab.Navigator
        screenOptions={{
          headerShown:false,
        }}
        >
          <Tab.Screen 
            name="ScheduleCrops" 
            component={ScheduleCrops} 
            options={{ title: 'Schedule Crops' }}
          />
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
            component={ForgotPassword}
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