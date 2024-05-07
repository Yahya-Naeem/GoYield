import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {SearchSchedule , ScheduleDetail , ScheduleCrops} from '../../components/schedulecrops/index.js';
import ScheduleCropsScreen from '../../screens/schedulecrops/ScheduleCropsScreen.jsx';
const ScheduleStack = createStackNavigator(); 
export default function ScheduleNavigation() {
  return (
      <ScheduleStack.Navigator>
        <ScheduleStack.Screen 
            name="ScheduleCrops" 
            options={{ title: 'Schedule Crop' }}
        >
            {props => <ScheduleCropsScreen component={ScheduleCrops} {...props} />}
        </ScheduleStack.Screen>
        <ScheduleStack.Screen 
            name="SearchSchedule" 
            //component={SearchSchedule}
            options={{ title: 'Search Schedule' }}
        >
        {props => <ScheduleCropsScreen component={SearchSchedule} {...props} />}
        </ScheduleStack.Screen>
        <ScheduleStack.Screen 
            name="ScheduleDetail" 
            //component={ScheduleDetail}
            options={{ title: 'Schedule Details' }}
        >
            {props => <ScheduleCropsScreen component={ScheduleDetail} {...props} />}
        </ScheduleStack.Screen>
      </ScheduleStack.Navigator>
    );
  }