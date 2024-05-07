import React from 'react';
import {View,Text,Pressable} from 'react-native'
;import AppStyles from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SearchSchedule() {
    const navigation = useNavigation();
    const saveDetailToStorage = async (detail) => {
        try {
            console.log('Saving detail object:', detail); // Log the detail object before saving
            await AsyncStorage.removeItem('details');
            await AsyncStorage.setItem('details', JSON.stringify(detail));
            console.log('Detail object saved to AsyncStorage');
        } catch (error) {
            console.error('Error saving detail object to AsyncStorage:', error);
        }
    };
    
  return (
        <View style={[AppStyles.itemContainer,{height:'100%',justifyContent:'space-between' }]}>
            
            <View style={{marginTop:165}}>
                <View style={AppStyles.button}>
                    <Text style={[AppStyles.buttonText,{fontWeight:'bold'}]}>
                        Available Schedules
                    </Text>
                </View>
                    <Pressable
                        style={AppStyles.displayOption}
                        onPress={async() => {
                            // Create the detail object
                            const detail = {
                                startDate: '10/1/2023',
                                endDate: '10/4/2023',
                                rains: ['10/2/2023', '11/2/2023'],
                                storms: ['10/2/2023', '11/2/2023'],
                                hails: []
                            };
                            
                            // Save the detail object to AsyncStorage
                            await saveDetailToStorage(detail);

                            // Navigate to ScheduleDetail
                            navigation.navigate('ScheduleDetail');
                        }}
                    >
                    <View style={[AppStyles.index,AppStyles.itemContainer]}>
                        <Text style={[AppStyles.buttonText]}>1</Text>
                    </View>
                    <View>
                        <Text style={AppStyles.fontFamily}>
                            Start Date: 1/2/23{'\n'}
                            End Date:1/4/23 {'\n'}
                            Alerts: 05
                        </Text>
                    </View>
                </Pressable>
            </View>
            <View style={{paddingBottom:20}}>
                <Text style={AppStyles.fontFamily}>
                    Click to Explore <Text style={[AppStyles.clrText,{fontWeight:'bold'}]}>more</Text> Details
                </Text>
            </View>
        </View>
  )
}

