import { View, Text } from 'react-native'
import React from 'react'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import OtpScreen from '../screens/Otpscreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={SignInScreen} />
    <Stack.Screen name="Register" component={SignUpScreen} />
    <Stack.Screen name="Otp" component={OtpScreen} />
  </Stack.Navigator>
  )
}