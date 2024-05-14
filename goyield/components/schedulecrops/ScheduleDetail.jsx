import React,{useState,useEffect} from 'react';
import { View, Text, Pressable } from 'react-native';
import AppStyles from '../../styles/Styles';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
export default function ScheduleDetail({collectionName , schedule}) {
  const navigation = useNavigation();
  const region = {
    bwl:'Bahawalpur',
    faisalabad:'Faisalabad',
    gujranwala:'Gujranwala',
    gujrat:'Gujrat',
    lahore:'Lahore',
    dgk:'Gera Ghazi Khan',
  }
  const crop = {
    rice:'Rice',
    wheat:'Wheat',
    sunflower:'Sunflower',
  }
  const handleAdd = async() =>{
    const user = auth().currentUser;
    if(user){
      try{
        const userDocRef = firestore().collection('users').doc(user.uid);
        const userdoc = await userDocRef.get();
        if(userdoc.exists){
          let selectedSchedules = userdoc.data().selectedSchedules;
          if (selectedSchedules[collectionName]) {
            if(!selectedSchedules[collectionName].includes(schedule.id)){
              selectedSchedules[collectionName].push(schedule.id);
            }
            else{
              throw new Error('Schedule already exists');
            }
          } else {
            selectedSchedules[collectionName] = [schedule.id];
          }
          await userDocRef.update({
            selectedSchedules:selectedSchedules,
          });
          alert('Schedule added successfully');
        }
        else{
          alert('Unable to find user');
        }
      }
      catch(error){
        if (error.message === 'Schedule already exists') {
          alert(error.message);
        } else {
          alert('Error setting schedules, try again');
          console.log(error);
        }
      } 
      finally{
        navigation.goBack();
      }
    }
    else{
      alert('Error adding schedule, Try again');
    }

  }
  return (
    <View style={[AppStyles.itemContainer,{marginTop:165,gap:20}]}>
      <View style={[AppStyles.instructionContainer,{alignItems:'center',justifyContent:'center'}]}>
        <Text style={[AppStyles.buttonText,AppStyles.inputError]}>Alerts : {schedule.Rain.length + schedule.Storm.length}</Text>
        <Text style={AppStyles.fontFamily}>Region : {region[collectionName.split('_')[0]]}</Text>
        <Text style={AppStyles.fontFamily}>Crop : {crop[collectionName.split('_')[1]]}</Text>
        <Text style={AppStyles.fontFamily}>Start Date : {schedule.Planting_dates}</Text>
        <Text style={AppStyles.fontFamily}>Rains : {schedule.Rain?.length}</Text>
        <Text style={AppStyles.fontFamily}>Storms : {schedule.Storm?.length}</Text>
        <Text style={AppStyles.fontFamily}>End Date : {schedule.End_date}</Text>
      </View>
      <View>
        <Pressable
          style={AppStyles.button}
          onPress={handleAdd}
        >
            <Text style={AppStyles.buttonText}>
                Add to list
            </Text>
        </Pressable>
      </View>
    </View>
  );
}
