import React from 'react'
import {View} from 'react-native';
import SignUp from '../../components/signup/SignUp';
import AppStyles from '../../styles/Styles';
export default function Login() {
  return (
    <View style={AppStyles.container}>
      <SignUp />
    </View>
  )
}
