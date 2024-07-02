import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import Button from '../../helper/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    AsyncStorage.removeItem('user');
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={{...StylesGloble.container}}>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#B3B6B7',
          backgroundColor: '#F8CE58',
          height: 50,
        }}>
        <Text
          style={{
            ...StylesGloble.font20700000000,
            textAlign: 'center',
            top: 10,
          }}>
          DASHBOARD
        </Text>
      </View>
      <View style={{...StylesGloble.marginscreen}}>
        <View style={{width: '40%', alignSelf: 'flex-end', marginTop: 5}}>
          <Button label={'LOGOUT'} onPress={handleLogout} />
        </View>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#B3B6B7',
            height: '20%',
            top: 5,
            padding: 20,
          }}>
          <Text
            style={{
              ...StylesGloble.font20700000000,
              textAlign: 'center',
              fontSize: 15,
            }}>
            USER DETAILS
          </Text>

          <Text
            style={{
              ...StylesGloble.font20700000000,
              textAlign: 'center',
              fontSize: 15,
              top: 10,
            }}>
            USER DETAILS SHOULD RENDER HARE
          </Text>
        </View>

        <View
          style={{
            borderWidth: 2,
            borderColor: '#B3B6B7',
            height: '65%',
            top: 10,
            padding: 10,
          }}>
          <Text
            style={{
              ...StylesGloble.font20700000000,
              textAlign: 'center',
              fontSize: 15,
            }}>
            INFORMATION DETAILS
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
