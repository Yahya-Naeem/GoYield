import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/home/HomeScreen.jsx';
import FeedbackScreen from '../../screens/feedback/FeedbackScreen.jsx';
import ScheduleCropsScreen from '../../screens/schedulecrops/ScheduleCropsScreen.jsx';
import TrackCropsScreen from '../../screens/trackcrops/TrackCropsScreen.jsx';
import UserManualScreen from '../../screens/usermanual/UserManualScreen.jsx';
import VideoTutorialScreen from '../../screens/videotutorial/VideoTutorialScreen.jsx';
import CropDetailScreen from '../../screens/cropdetail/CropDetailScreen.jsx';
import HomeNavigator from '../homenavigator/Navigator.jsx';
import ScheduleNavigation from '../schedulenavigator/Navigator.jsx';
import TrackNavigation from '../tracknavigator/Navigator.jsx';
const Stack = createStackNavigator(); 
export default function InnerNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
            name="HomeNavigator" 
            component={HomeNavigator} 
            options={{ headerShown:false }}
        />
        <Stack.Screen 
            name="Feedback" 
            component={FeedbackScreen}
            options={{ title: 'Feedback' }}
        />
        <Stack.Screen 
            name="ScheduleNavigation" 
            component={ScheduleNavigation}
            options={{ headerShown:false}}
        />
        <Stack.Screen 
            name="TrackCrops" 
            component={TrackNavigation}
            options={{ headerShown:false}}
        />
        <Stack.Screen 
            name="VideoTutorial" 
            component={VideoTutorialScreen}
            options={{ title: 'Video Tutorials' }}
        />
        <Stack.Screen 
            name="UserManual" 
            component={UserManualScreen}
            options={{ title: 'User Manuals' }}
        />
        <Stack.Screen 
            name="CropDetails" 
            component={CropDetailScreen}
            options={{ title: 'Crop Details' }}
        />
      </Stack.Navigator>
    );
  }