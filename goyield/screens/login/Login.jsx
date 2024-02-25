import React from 'react'
import { View, Dimensions} from 'react-native';
import SignIn from '../../components/login/SignIn';
import AppStyles from '../../styles/Styles';
import LoginLogo from '../../assets/svgs/Login.svg';
export default function Login() {
  windowHeight = Dimensions.get('window').height;
  windowWidth = Dimensions.get('window').width;
  return (
    <View style={[AppStyles.container,{gap:10}]}>
      <View style={[AppStyles.itemContainer,{flex:0.5}]}>
        <LoginLogo height={windowHeight*0.25} width={windowWidth*1}/>
      </View>
      <View style={{flex:1}}>
        <SignIn />
      </View>
    </View>
  )
}
