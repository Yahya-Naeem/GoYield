import {AppState, View} from 'react-native';
import Home from '../../components/home/Home';
import AppStyles from '../../styles/Styles';
export default function HomeScreen() {
  return (
    <View style={AppStyles.container}>
      <Home />
    </View>
  )
}
