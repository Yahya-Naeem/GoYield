import React, { useEffect, useState } from 'react';
import { SearchIcon, VideoIcon, UserManualIcon, LeafIcon, FeedbackIcon, ScheduleIcon } from '../../assets/svgs/index';
import {View, Text, Dimensions} from 'react-native';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [parentWidth, setParentWidth] = useState(0);   //width of parent view component
    const navigator = useNavigation;
    const handleParentWidth = (event) => {
    /*
    Function to calculate width of View component 
    */    
        const { width } = event.nativeEvent.layout;
        setParentWidth(width);
    };
    return (
      <View style={{gap:20}}>
        <View style={[AppStyles.row]}>
        <View 
            style={AppStyles.rowItem} 
            onLayout={handleParentWidth}
            onClick={()=> navigator.navigate('ScheduleCrops')} >
            <ScheduleIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
            <Text style={AppStyles.rowText}>Schedule</Text>
        </View>
        <View style={AppStyles.rowItem}>
            <SearchIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
            <Text style={AppStyles.rowText}>Track Crop</Text>
        </View>
        </View>

        <View style={[AppStyles.row]}>
        <View style={AppStyles.rowItem}>
            <LeafIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
            <Text style={AppStyles.rowText}>Crop Details</Text>
        </View>
        <View style={AppStyles.rowItem}>
            <FeedbackIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
            <Text style={AppStyles.rowText}>Feedback</Text>
        </View>
        </View>

        <View style={[AppStyles.row]}>
        <View style={AppStyles.rowItem}>
            <VideoIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
            <Text style={AppStyles.rowText}>Video Tutorial</Text>
        </View>
        <View style={AppStyles.rowItem}>
            <UserManualIcon width={parentWidth * 0.35} height={parentWidth * 0.375} />
            <Text style={AppStyles.rowText}>User Manual</Text>
        </View>
        </View>

      </View>
  )
};


