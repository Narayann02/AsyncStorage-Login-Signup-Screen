import React, {useState,useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert, Keyboard} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import TextField from '../../helper/TextField';
import PasswordTextField from '../../helper/PasswordTextField';
import Button from '../../helper/Button';
import Disablebutton from '../../helper/Disablebutton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignInScreen = ({navigation}) => {
  const [btndisable, setbtndisable] = useState(false);
  const [keyboardheight, setkeyboardheight] = useState('65%');

  const [inputemail, setinputemail] = useState({
    value: null,
    message: '',
    isValid: false,
  });
  const [inputPassword, setInputPassword] = useState({
    value: null,
    message: '',
    isValid: false,
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setkeyboardheight('45%');
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setkeyboardheight('65%');
      },
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = email => {
    return emailReg.test(String(email).toLowerCase());
  };
  const validateemail = _in => {
    try {
      setinputemail(prev => ({...prev, value: _in}));
      if (!_in) {
        setinputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
        setbtndisable(false);
      } else if (!isValidEmail(_in)) {
        setinputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter a valid Email ',
        }));
        setbtndisable(false);
      } else if (_in.length === 0) {
        setinputemail(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter email',
        }));
        setbtndisable(false);
      } else {
        setinputemail(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
    checkvalidation();
  };

  const validatePassword = _in => {
    try {
      setInputPassword(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputPassword(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter password',
        }));
      } else if (_in.length < 8) {
        setInputPassword(prev => ({
          ...prev,
          isValid: true,
          message: '  password must be 8 character',
        }));
      } else {
        setInputPassword(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
    checkvalidation();
  };

  const checkvalidation = () => {
    if (inputemail.value != null && inputPassword.value != null) {
      setbtndisable(true);
    } else {
      setbtndisable(false);
    }
  };

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const user = storedUser ? JSON.parse(storedUser) : null;

      if (
        user &&
        user.inputemail.value === inputemail.value &&
        user.inputPassword.value === inputPassword.value
      ) {
  
        Alert.alert('Success', 'Login successful!');
        
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Error', 'Invalid username or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to login');
    }
  };

  return (


    <View style={{...StylesGloble.container}}>
      <View style={{...StylesGloble.marginscreen}}>
        <View style={{marginTop: 20}}>
          <Text style={{...StylesGloble.font20700000000, textAlign: 'center'}}>
            SIGN IN
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <TextField
            name={'EMAIL ADDRESS'}
            Placeholder="email here"
            type="email"
            value={inputemail.value}
            sectext="false"
            errorText={inputemail.message}
            onChangeText={text => validateemail(text)}
          />
        </View>
        <View style={{marginTop: 15}}>
          <PasswordTextField
            name={'PASSWORD'}
            Placeholder="password here"
            type="text"
            value={inputPassword.value}
            sectext="false"
            errorText={inputPassword.message}
            onChangeText={text => validatePassword(text)}
          />
        </View>

        <View style={{width: '50%', alignSelf: 'center', marginTop: '12%'}}>
          {btndisable ? (
            <Button
              label={'Sign In'}
              onPress={() => {
                handleLogin();
              }}
            />
          ) : (
            <Disablebutton label={'Sign In'} />
          )}
        </View>
      </View>
    </View>

  );
};
export default SignInScreen;
