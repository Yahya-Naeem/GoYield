import {AppState, View} from 'react-native';
import Home from '../../components/home/Home';
import AppStyles from '../../styles/Styles';
import { EllipseIcon, TopEllipseIcon, WelcomeIcon } from '../../assets/svgs/index.js';
export default function HomeScreen() {
  return (
    <View style={AppStyles.container}>
      <View style={{position:'absolute',top:-20,left:0}}>
          <TopEllipseIcon width={165} height={165} />
      </View>
      <View style={{position:'absolute',left:-20,top:0}}>
              <EllipseIcon width={165} height={165} />
      </View>
      <View style={{marginTop:'25%'}}>
        <Home />
      </View>
    </View>
  )
}
