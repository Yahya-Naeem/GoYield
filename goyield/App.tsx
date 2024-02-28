import 'react-native-gesture-handler'
import { SafeAreaView, ScrollView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//navigation Import 
import OuterTabs from './navigations/outernavigator/Navigator.jsx';

//icons import
import { EllipseIcon,TopEllipseIcon } from './assets/svgs/index.js';

//styles import 
import AppStyles from './styles/Styles.jsx';

function App () {
  return (
    <NavigationContainer>
    <SafeAreaView style={[AppStyles.background]}>
      <ScrollView
        contentContainerStyle={AppStyles.container}
        >
          

          
            <OuterTabs />
          
      </ScrollView>
    </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
