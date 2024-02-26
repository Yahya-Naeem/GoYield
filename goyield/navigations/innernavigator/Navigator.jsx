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

//creating stack object 
const Stack = createStackNavigator();
export default function InnerNavigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'Home Screen' }}
        />
        <Stack.Screen 
            name="Feedback" 
            component={FeedbackScreen}
            options={{ title: 'Feedback' }}
        />
        <Stack.Screen 
            name="ScheduleCrops" 
            component={ScheduleCropsScreen}
            options={{ title: 'Schedule Crops' }}
        />
        <Stack.Screen 
            name="TrackCrops" 
            component={TrackCropsScreen}
            options={{ title: 'Track Crops' }}
        />
        <Stack.Screen 
            name="VideoTutorial" 
            component={VideoTutorialScreen}
            options={{ title: 'Video Tutorials' }}
        />
        <Stack.Screen 
            name="usermanual" 
            component={UserManualScreen}
            options={{ title: 'User Manuals' }}
        />
        <Stack.Screen 
            name="cropdetails" 
            component={CropDetailScreen}
            options={{ title: 'Crop Details' }}
        />
      </Stack.Navigator>
    );
  }