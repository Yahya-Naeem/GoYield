import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import TrackCrops from '../../components/trackcrops/TrackCrops';
import TrackDetails from '../../components/trackcrops/TrackDetails';
import TrackCropsScreen from '../../screens/trackcrops/TrackCropsScreen';

TrackStack = createStackNavigator();
function TrackNavigation(){
    return(
        <TrackStack.Navigator>
            <TrackStack.Screen
                name = 'trackCrops'
                options={{title: 'Track Crops'}}
            >
                {props => <TrackCropsScreen component={TrackCrops} {...props} />}
            </TrackStack.Screen>
            <TrackStack.Screen
                name = 'trackDetails'
                options={{title: 'Crop Details'}}
            >
                {props => <TrackCropsScreen component={TrackDetails} {...props} />}
            </TrackStack.Screen>
        </TrackStack.Navigator>
    )
}
export default TrackNavigation;