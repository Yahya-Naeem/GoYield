import React from 'react'
import Ellipse from '../../assets/svgs/Ellipse.svg';
import TopEllipse from '../../assets/svgs/TopEllipse.svg';
import { Text ,View} from 'react-native';
import SignIn from '../../components/login/SignIn';
export default function Login() {
  return (
    <>
    <View style={{position:'absolute',left:-50,top:-20}}>
      <Ellipse width={165} height={165} />
    </View>
    <View style={{position:'absolute',top:-50}}>
      <TopEllipse width={165} height={165} />
    </View>
    <SignIn />
    </>
  )
}
