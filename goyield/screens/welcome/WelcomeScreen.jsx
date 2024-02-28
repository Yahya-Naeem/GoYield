import Welcome from '../../components/welcome/Welcome';
import { EllipseIcon, TopEllipseIcon, WelcomeIcon } from '../../assets/svgs/index.js';
import AppStyles from '../../styles/Styles';
import {View} from 'react-native';
export default function WelcomeScreen() {
  return (
    <View style={AppStyles.container}>
      <View style={{position:'absolute',top:-20,left:0}}>
          <TopEllipseIcon width={165} height={165} />
      </View>
      <View style={{position:'absolute',left:-20,top:0}}>
              <EllipseIcon width={165} height={165} />
      </View>
      <View style={[AppStyles.itemContainer,{marginTop:'60%'}]}>
            <WelcomeIcon  /> 
      </View>
      <Welcome/>
    </View>
  )
}
