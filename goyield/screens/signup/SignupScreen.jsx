import React from 'react'
import {View} from 'react-native';
import SignUp from '../../components/signup/SignUp';
import AppStyles from '../../styles/Styles';
import { EllipseIcon, TopEllipseIcon} from '../../assets/svgs/index.js';
export default function Login() {
  return (
    <View style={AppStyles.container}>
      <View style={{position:'absolute',top:-20,left:0}}>
          <TopEllipseIcon width={165} height={165} />
      </View>
      <View style={{position:'absolute',left:-20,top:0}}>
              <EllipseIcon width={165} height={165} />
      </View>
      <View style={{marginTop:'35%'}}>
        <SignUp />
      </View>
    </View>
  )
}
