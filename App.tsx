import React from 'react';
import { Text, View } from 'react-native';
import CustomerLabel from './src/components/CustomerLabel';

function App() {

  return (
    <View style={{ alignItems: 'center'}}>  
    <Text>Welcome</Text>
    <CustomerLabel />
  </View>
  );
}

export default App;
