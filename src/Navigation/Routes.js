import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from '../screen/Splashscreen';

import SignInScreen from '../screen/SignInScreen';
import SignupScreen from '../screen/SignupScreen';
import Dashboard from '../screen/Dashboard';

import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
