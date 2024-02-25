import React from 'react'
import Ellipse from '../../assets/svgs/Ellipse.svg';
import TopEllipse from '../../assets/svgs/TopEllipse.svg';
import { Text ,View} from 'react-native';
import SignIn from '../../components/login/SignIn';
import AppStyles from '../../styles/Styles';
export default function Login() {
  return (
    <View style={AppStyles.container}>
      <SignIn />
    </View>
  )
}
