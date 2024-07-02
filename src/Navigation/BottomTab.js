import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, Modal} from 'react-native';

import {StylesGloble} from '../helper/GlobleCss';

import SignInScreen from '../screen/SignInScreen';
import SignupScreen from '../screen/SignupScreen';

const Tab = createBottomTabNavigator();

function BottomTab({navigation}) {
  // const [focus, setfocus] = useState(false);

  return (
    <>
      <Tab.Navigator
        initialRouteName={'SignInScreen'}
        screenOptions={{
          headerShown: false,
          activeTintColor: '#ffffff',
          inactiveTintColor: '#d9d9d9',
          activeColor: '#ffffff',
          inactiveColor: '#443f47',
          tabBarShowLabel: true,

          tabBarStyle: {
            backgroundColor: '#ffffff',

            height: 60,
            activeTintColor: '#ffffff',
          },
          tabBarLabelStyle: {
            fontSize: 13,
            color: '#FFFFFF',
          },
        }}>
        <Tab.Screen
          name={'SignInScreen'}
          component={SignInScreen}
          activeColor={'#ffffff'}
          screenOptions={{
            headerShown: false,
          }}
          inactiveColor={'#443f47'}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 50,
                    right: 0,
                    height: 91,
                    width: 80,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
          
                  <View style={{width: 200}}>
                    <View
                      style={{
                        backgroundColor: focused ? '#F8CE58' : '#B3B6B7',
                        height: 48,
                        borderRadius: 0,
                        padding: 12,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '800',
                          color: '#000000',
                          textAlign: 'center',
                        }}>
                        Sign In
                      </Text>
                    </View>
                  </View>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={'SignupScreen'}
          component={SignupScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    bottom: -10,
                    left: 50,
                    height: 91,
                    width: 80,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                
                  <View style={{width: 170}}>
                    <View
                      style={{
                        backgroundColor: focused ? '#F8CE58' : '#B3B6B7',

                        height: 48,
                        borderRadius: 0,
                        padding: 12,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '800',
                          color: '#000000',
                          textAlign: 'center',
                        }}>
                        Sign Up
                      </Text>
                    </View>
                  </View>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default BottomTab;
