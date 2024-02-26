import Welcome from '../../components/welcome/Welcome';
import WelcomeLogo from '../../assets/svgs/Welcome.svg';
import AppStyles from '../../styles/Styles';
import {View} from 'react-native';
export default function WelcomeScreen() {
  return (
    <View style={AppStyles.container}>
      <View style={[AppStyles.itemContainer]}>
        <WelcomeLogo  /> 
      </View>
      <Welcome/>
    </View>
  )
}
