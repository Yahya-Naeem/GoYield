import React from 'react'
import { View, Dimensions} from 'react-native';
import SignIn from '../../components/login/SignIn';
import AppStyles from '../../styles/Styles';
import LoginLogo from '../../assets/svgs/Login.svg';
import { EllipseIcon, TopEllipseIcon, WelcomeIcon } from '../../assets/svgs/index.js';
export default function Login() {
  windowHeight = Dimensions.get('window').height;
  windowWidth = Dimensions.get('window').width;
  return (
    <View style={[AppStyles.container]}>
      <View style={{position:'absolute',top:-20,left:0}}>
          <TopEllipseIcon width={165} height={165} />
      </View>
      <View style={{position:'absolute',left:-20,top:0}}>
              <EllipseIcon width={165} height={165} />
      </View>
      <View style={[AppStyles.itemContainer,{flex:0.5,marginTop:'35%'}]}>
        <LoginLogo height={windowHeight*0.25} width={windowWidth*1}/>
      </View>
      <View style={{flex:1,marginTop:'3%'}}>
        <SignIn />
      </View>
    </View>
  )
}
