import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigation from './src/navigations/AppNavigation';
import 'react-native-gesture-handler';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

function App() {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
      secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={sty.container}>
        <AppNavigation />
        {/* <LoginScreen /> */}
        {/* <SignupScreen /> */}
      </View>
    </PaperProvider>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
})

export default App;
