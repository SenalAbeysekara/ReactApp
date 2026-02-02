import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import AppNavigation from './src/navigations/AppNavigation';
import 'react-native-gesture-handler';

function App() {
  return (
    <View style={sty.container}>
      <AppNavigation />
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
    </View>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

export default App;
