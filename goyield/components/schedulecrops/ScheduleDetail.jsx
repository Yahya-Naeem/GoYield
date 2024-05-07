import React,{useState,useEffect} from 'react';
import { View, Text, Pressable } from 'react-native';
import AppStyles from '../../styles/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import App from '../../App';
export default function ScheduleDetail() {
    // const [detail, setDetail] = useState(null); // State to store the detail data

    // useEffect(() => {
    //     const fetchDetailFromStorage = async () => {
    //       try {
    //         const detailData = await AsyncStorage.getItem('details');
    //         console.log('Retrieved detail data from AsyncStorage:', detailData); // Log the retrieved data
    //         if (detailData) {
    //           setDetail(JSON.parse(detailData));
    //           console.log('Parsed detail data:', detail); // Log the parsed data
    //         }
    //       } catch (error) {
    //         console.error('Error fetching detail data from AsyncStorage:', error);
    //       }
    //     };
    
    //     fetchDetailFromStorage();
    // }, []);
    const detail = {
        startDate: '10/1/2023',
        endDate: '10/4/2023',
        rains: ['10/2/2023', '11/2/2023'],
        storms: ['10/2/2023', '11/2/2023'],
        hails: []
    };
  return (
    <View style={[AppStyles.itemContainer,{marginTop:165,gap:20}]}>
      <View style={[AppStyles.instructionContainer,{alignItems:'center',justifyContent:'center'}]}>
        <Text style={[AppStyles.buttonText,AppStyles.inputError]}>Alerts : {detail.rains.length + detail.storms.length + detail.hails.length}</Text>
        <Text style={AppStyles.fontFamily}>Start Date : {detail.startDate}</Text>
        <Text style={AppStyles.fontFamily}>Rains : {detail.rains.length}</Text>
        <Text style={AppStyles.fontFamily}>Storms : {detail.storms.length}</Text>
        <Text style={AppStyles.fontFamily}>Hailings : {detail.hails.length}</Text>
        <Text style={AppStyles.fontFamily}>End Date : {detail.endDate}</Text>
      </View>
      <View>
        <Pressable
        style={AppStyles.button}
        >
            <Text style={AppStyles.buttonText}>
                Add to list
            </Text>
        </Pressable>
      </View>
    </View>
  );
}
