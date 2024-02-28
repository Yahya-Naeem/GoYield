import React from 'react'
import { View,Text } from 'react-native'
import AppStyles from '../../styles/Styles';
import { EllipseIcon, TopEllipseIcon, WelcomeIcon } from '../../assets/svgs/index.js';
function ScheduleCropsScreen() {
  return (
    <View style={AppStyles.container}>
      <View style={{position:'absolute',top:-20,left:0}}>
          <TopEllipseIcon width={165} height={165} />
      </View>
      <View style={{position:'absolute',left:-20,top:0}}>
              <EllipseIcon width={165} height={165} />
      </View>
      <Text>schedule crops screen</Text>
    </View>
  )
}

export default ScheduleCropsScreen;