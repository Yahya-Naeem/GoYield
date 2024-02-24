import React from 'react';
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
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import SignIn from './components/login/SignIn.jsx';
import Login from './screens/login/Login.jsx';
 function App () {
  return (
    <SafeAreaView style={[AppStyles.background]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={AppStyles.container}
        >
          <Login />  
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
