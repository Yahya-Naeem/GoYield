import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ellipse from './assets/svgs/Ellipse.svg';
import TopEllipse from './assets/svgs/TopEllipse.svg';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppStyles from './styles/Styles.jsx';
import OuterTabs from './navigations/outernavigator/Navigator.jsx';
 function App () {
  return (
    <SafeAreaView style={[AppStyles.background]}>
      <ScrollView
        contentContainerStyle={AppStyles.container}
        >
          <View style={{left:-20,top:0}}>
              <Ellipse width={165} height={165} />
            </View>
          <View style={{position:'absolute',top:-20,left:0}}>
              <TopEllipse width={165} height={165} />
          </View>
          <NavigationContainer>
            <OuterTabs />
          </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
