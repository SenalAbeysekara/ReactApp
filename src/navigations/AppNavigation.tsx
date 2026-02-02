import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const MyStack = createStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <MyStack.Navigator screenOptions={{ headerShown: false }}>
            <MyStack.Screen name="Login" component={LoginScreen} />
            <MyStack.Screen name="Signup" component={SignupScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
        </MyStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;
