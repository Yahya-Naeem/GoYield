import React from 'react';
import { View, Text, Pressable } from 'react-native';
import AppStyles from '../../styles/Styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function TrackDetails({ schedule }) {
  const navigation = useNavigation();
  const handleRemove = async() => {
    const user = auth().currentUser;
    if(user){
      try{
        const userDocRef = firestore().collection('users').doc(user.uid);
        const userDoc = await userDocRef.get();
        if(userDoc.exists){
          const selectedSchedules = userDoc.data().selectedSchedules;
          if(selectedSchedules[schedule.collectionName]){
            selectedSchedules[schedule.collectionName] = selectedSchedules[schedule.collectionName].filter((id)=>id!=schedule.id);
          }
          if(selectedSchedules[schedule.collectionName].length === 0){
            delete selectedSchedules[schedule.collectionName];
          }
          //update data
          await userDocRef.update({selectedSchedules});
          alert('Schedule Deleted Successfully');
        }
      }
      catch(error){
        alert('Error removing Schedule,try again later');
        console.error('error',error);
      }
      finally{
        navigation.goBack();
      }
    }
    else{
      alert('Error removing schedule, try again later');
    }
  }
  return (
    <View style={[AppStyles.itemContainer,{marginTop:165,gap:20}]}>
      <View style={[AppStyles.instructionContainer,{alignItems:'center',justifyContent:'center'}]}>
        <Text style={[AppStyles.buttonText,AppStyles.inputError]}>Alerts : {schedule.Rain?.length + schedule.Storm?.length}</Text>
        <Text style={AppStyles.fontFamily}>Start Date : {schedule.Planting_dates}</Text>
        <Text style={AppStyles.fontFamily}>Rains : {schedule.Rain?.length}</Text>
        <Text style={AppStyles.fontFamily}>Storms : {schedule.Storm?.length}</Text>
        <Text style={AppStyles.fontFamily}>End Date : {schedule.End_date}</Text>
      </View>
      <View>
        <Pressable
        style={AppStyles.button}
        onPress = {handleRemove}
        >
            <Text style={AppStyles.buttonText}>
                Remove Schedule
            </Text>
        </Pressable>
      </View>
    </View>
  )
}