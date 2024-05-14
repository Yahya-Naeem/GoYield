import React from 'react';
import {View,Text,Pressable,FlatList,Dimensions} from 'react-native'
;import AppStyles from '../../styles/Styles'
import { useNavigation } from '@react-navigation/native';
export default function SearchSchedule({schedules,collectionName}) {
    const navigation = useNavigation();
    const renderItem = ({ item, index }) => (
        <View style={[{width:'80%'},AppStyles.itemContainer]}>
            <Pressable
                key={index} // Ensure to provide a unique key for each item
                style={AppStyles.displayOption}
                onPress={() => {
                    navigation.navigate('ScheduleDetail', { collectionName: collectionName, schedule: item });
                }}
            >
            <View style={[AppStyles.index, AppStyles.itemContainer]}>
                <Text style={[AppStyles.buttonText]}>{index}</Text>
            </View>
            <View>
                <Text style={AppStyles.fontFamily}>
                Start Date: {item.Planting_dates}{'\n'}
                End Date: {item.End_date}{'\n'}
                <Text style={AppStyles.inputError}>Alerts : {item.Rain.length + item.Storm.length}</Text>
                </Text>
            </View>
        </Pressable>
        </View>
      );
  return (
        <View style={[AppStyles.itemContainer,{height:'80%',justifyContent:'space-between' }]}>
            <View style={[{marginTop:125},AppStyles.itemContainer]}>
                <View style={[AppStyles.button,{marginBottom:10}]}>
                    <Text style={[AppStyles.buttonText,{fontWeight:'bold'}]}>
                        Available Schedules
                    </Text>
                </View>
                <FlatList
                    data={schedules}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()} // or use item.id if available
                    onScrollBeginDrag={(e) => {
                        e.preventDefault();
                      }}
                      contentContainerStyle={{ marginRight: -50 }} // Adjust paddingRight as needed
                />
            </View>
            <View style={{paddingBottom:20}}>
                <Text style={AppStyles.fontFamily}>
                    Click to Explore <Text style={[AppStyles.clrText,{fontWeight:'bold'}]}>more</Text> Details
                </Text>
            </View>
        </View>
  )
}

