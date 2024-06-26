import React from 'react';
import { View , Text } from 'react-native';
import { EllipseIcon, TopEllipseIcon } from '../../assets/svgs/index.js';
import AppStyles from '../../styles/Styles.jsx';
import Logout from '../../components/logout/Logout.jsx';
export default function LogoutScreen() {
  return (
    <View style={AppStyles.container}>
      <View style={{position:'absolute',top:-20,left:0}}>
          <TopEllipseIcon width={165} height={165} />
      </View>
      <View style={{position:'absolute',left:-20,top:0}}>
              <EllipseIcon width={165} height={165} />
      </View>
      <Logout />
    </View>
  )
}
