import React from 'react'
import { View, Dimensions} from 'react-native';
import ScheduleCrops from '../../components/schedulecrops/ScheduleCrops.jsx';
import AppStyles from '../../styles/Styles';
import ScheduleLogo from '../../assets/svgs/ScheduleLogo.svg';
export default function Login() {
  windowHeight = Dimensions.get('window').height;
  windowWidth = Dimensions.get('window').width;
  return (
    <View style={[AppStyles.container,{gap:10}]}>
      <View style={[AppStyles.itemContainer,{flex:0.5}]}>
        <ScheduleLogo height={windowHeight*0.25} width={windowWidth*1}/>
      </View>
      <View style={{flex:1}}>
        <ScheduleCrops />
      </View>
    </View>
  )
}
