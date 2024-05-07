import React, { useEffect, useState } from 'react';
import { SearchIcon, VideoIcon, UserManualIcon, LeafIcon, FeedbackIcon, ScheduleIcon } from '../../assets/svgs/index';
import {View, Text, Pressable} from 'react-native';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [parentWidth, setParentWidth] = useState(0);   //width of parent view component
    const navigation = useNavigation();
    const handleParentWidth = (event) => {
    /*
    Function to calculate width of View component 
    */    
        const { width } = event.nativeEvent.layout;
        setParentWidth(width);
    };
    const onPressSchedule = (path) => {
        navigation.navigate(path); // navigate to 'ScheduleCrops' screen
      };
    return (
      <View style={{gap:20}}>

        {/**Row 1 */}
        <View style={[AppStyles.row]}>
            <Pressable onPress={() => onPressSchedule('ScheduleNavigation')} > 
                <View 
                    style={AppStyles.rowItem} onLayout={handleParentWidth}>
                        <ScheduleIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
                        <Text style={AppStyles.rowText}>Schedule</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => onPressSchedule('TrackCrops')}>
                <View style={AppStyles.rowItem}>
                    <SearchIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
                    <Text style={AppStyles.rowText}>Track Crop</Text>
                </View>
            </Pressable>
        </View>
        {/**Row 2 */}
        <View style={[AppStyles.row]}>
            <Pressable onPress={() => onPressSchedule('CropDetails')}>
                <View style={AppStyles.rowItem}>
                    <LeafIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
                    <Text style={AppStyles.rowText}>Crop Details</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => onPressSchedule('Feedback')}>
                <View style={AppStyles.rowItem}>
                    <FeedbackIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
                    <Text style={AppStyles.rowText}>Feedback</Text>
                </View>
            </Pressable>
        </View>
        {/**Row 3 */}
        <View style={[AppStyles.row]}>
            <Pressable onPress={() => onPressSchedule('VideoTutorial')}>   
                <View style={AppStyles.rowItem}>
                    <VideoIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
                    <Text style={AppStyles.rowText}>Video Tutorial</Text>
                </View>       
            </Pressable>

            <Pressable onPress={() => onPressSchedule('UserManual')}>
                <View style={AppStyles.rowItem}>
                    <UserManualIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
                    <Text style={AppStyles.rowText}>User Manual</Text>
                </View>
            </Pressable>
        </View>

      </View>
  )
};


