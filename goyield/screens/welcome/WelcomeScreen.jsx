import Welcome from '../../components/welcome/Welcome';
import AppStyles from '../../styles/Styles';
import {View} from 'react-native';
export default function WelcomeScreen() {
  return (
    <View style={AppStyles.container}>
      <Welcome/>
    </View>
  )
}
