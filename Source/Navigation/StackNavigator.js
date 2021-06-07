import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';
import TabNavigator from './TabNavigator';
import SignIn from '../Screens/SignIn';
import EmailId_View from '../Components/EmailId_View';
import MobileNo_View from '../Components/MobileNo_View';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SignUp">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Email" component={EmailId_View} />
      <Stack.Screen name="Mobile" component={MobileNo_View} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
