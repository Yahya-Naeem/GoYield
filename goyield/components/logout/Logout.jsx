import React, { useState } from 'react';
import {View,Text, Pressable} from 'react-native';
import AppStyles from '../../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default function Logout() {
    const[userName,setUserName] = useState('');
    const navigation = useNavigation();
    const fetchData = async()=>{
            const user = auth().currentUser;
            if(user){
                try{
                    const userData = await firestore().collection('users').doc(user.uid).get();
                    const name = userData.data().name;
                    setUserName(name);
                }
                catch(error){
                    alert('Error occurec ,Check internet connection and try again');
                }
            }
    }
    fetchData();
    const handleLogout = async() =>{
        try{
            await auth().signOut();
            navigation.navigate('Signin');
        }
        catch(error){
            alert('Error signing out , please try again later');
            console.log('Signout Error',error);
        }
    }
  return (
    <View style={[AppStyles.itemContainer,{gap:10}]}>
        <Text style={AppStyles.rowText}>Hi <Text style={[AppStyles.clrText,{fontWeight:'bold'}]}>{userName.toUpperCase()}</Text>, press button to logout</Text>
        <Pressable
        onPress={handleLogout}
        >
        <View style={AppStyles.button}>
            <Text style={AppStyles.buttonText}>
                Logout
            </Text>
        </View>
        </Pressable>
    </View>
  )
}
