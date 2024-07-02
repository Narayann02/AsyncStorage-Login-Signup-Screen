import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Keyboard,
} from 'react-native';
import {StylesGloble} from '../../helper/GlobleCss';
import TextField from '../../helper/TextField';
import {Dropdown} from 'react-native-element-dropdown';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import PasswordTextField from '../../helper/PasswordTextField';
import Button from '../../helper/Button';
import Disablebutton from '../../helper/Disablebutton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sexdata = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
];

const Qualifaicationdata = [
  {
    id: 1,
    name: '10th',
  },
  {
    id: 2,
    name: '12th',
  },
  {
    id: 3,
    name: 'Graduation',
  },
  {
    id: 4,
    name: 'PostGraduation',
  },
];

const SignupScreen = ({navigation}) => {
  const [btndisable, setbtndisable] = useState(false);
  const [keyboardheight, setkeyboardheight] = useState('65%');
  const [qualification, setqualification] = useState({
    id: '',
    name: '',
  });

  const [gender, setGender] = useState({
    id: '',
    name: '',
  });

  const [date, setDate] = useState(new Date());
  const [datee, setDatee] = useState('');
  const [selectpicker, setSelectpicker] = useState(false);

  const handleDOBchange = (event, selectedDate) => {
    if (selectedDate) {
      setSelectpicker(false);
      setDate(selectedDate);
      setDatee(moment(selectedDate).format('DD-MM-YYYY'));
    }
  };

  const [inputuserId, setInputuserId] = useState({
    value: null,
    message: '',
    isValid: false,
  });
  const [inputname, setinputname] = useState({
    value: null,
    message: '',
    isValid: false,
  });

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

  const [inputConfirmPassword, setinputConfirmPassword] = useState({
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

  const validateUserId = _in => {
    try {
      setInputuserId(prev => ({...prev, value: _in}));
      if (!_in) {
        setInputuserId(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter userId',
        }));
      } else if (_in.length < 3) {
        setInputuserId(prev => ({
          ...prev,
          isValid: true,
          message: 'User ID should be a number',
        }));
      } else {
        setInputuserId(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
    checkvalidation();
  };

  const validatefname = _in => {
    try {
      setinputname(prev => ({...prev, value: _in}));
      if (!_in) {
        setinputname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter name',
        }));
      } else if (_in.length === 0) {
        setinputname(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter name',
        }));
      } else {
        setinputname(prev => ({...prev, isValid: false, message: ''}));
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
          message: 'Please enter password',
        }));
      } else {
        setInputPassword(prev => ({...prev, isValid: false, message: ''}));
      }
    } catch (error) {}
    checkvalidation();
  };
  const validateconfirmPassword = _in => {
    try {
      setinputConfirmPassword(prev => ({...prev, value: _in}));
      if (!_in) {
        setinputConfirmPassword(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter confirm password',
        }));
      } else if (_in.length < 7) {
        setinputConfirmPassword(prev => ({
          ...prev,
          isValid: true,
          message: 'Please enter confirm password',
        }));
      } else {
        setinputConfirmPassword(prev => ({
          ...prev,
          isValid: false,
          message: '',
        }));
      }
    } catch (error) {}
    checkvalidation();
  };
  const [error, setError] = useState('');

  const checkvalidation = () => {
    if (
      inputuserId.value != null &&
      inputname.value != null &&
      inputemail.value != null &&
      gender != null &&
      qualification != null &&
      datee != null &&
      inputPassword.value != null &&
      inputConfirmPassword.value != null
    ) {
      setbtndisable(true);
    } else {
      setbtndisable(false);
    }
  };

  const handleSignup = async () => {
    if (inputPassword.value != inputConfirmPassword.value) {
      Alert.alert('Password and confirm password does not match');
    } else {
      try {
        const user = {inputemail, inputPassword};
        await AsyncStorage.setItem('user', JSON.stringify(user));
        Alert.alert('Success', 'User registered successfully!');
        navigation.navigate('SignInScreen');
      } catch (error) {
        Alert.alert('Error', 'Failed to register user');
      }
    }
  };

  return (
    <View style={{...StylesGloble.container}}>
      <ScrollView style={{marginBottom: 40}}>
        <View style={{...StylesGloble.marginscreen}}>
          <View style={{margin: 20}}>
            <Text
              style={{...StylesGloble.font20700000000, textAlign: 'center'}}>
              SIGN UP
            </Text>
          </View>

          <View style={{marginTop: 20}}>
            <TextField
              name={'USER ID'}
              Placeholder="Write userID here"
              type="text"
              value={inputuserId.value}
              sectext="false"
              errorText={inputuserId.message}
              onChangeText={text => validateUserId(text)}
            />
          </View>
          <View style={{marginTop: 20}}>
            <TextField
              name={'NAME'}
              Placeholder="Write name here"
              type="text"
              value={inputname.value}
              sectext="false"
              errorText={inputname.message}
              onChangeText={text => validatefname(text)}
            />
          </View>

          <View style={{marginTop: 20}}>
            <TextField
              name={'EMAIL'}
              Placeholder="Write email here"
              type="email"
              value={inputemail.value}
              sectext="false"
              errorText={inputemail.message}
              onChangeText={text => validateemail(text)}
            />
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#000000'}}>
              GENDER
            </Text>
          </View>

          <View style={{marginTop: 10}}>
            <Dropdown
              style={{
                borderWidth: 2,
                borderColor: '#B3B6B7',
                borderRadius: 4,
                padding: 12,
                marginTop: 0,
                backgroundColor: '#ffffff',
              }}
              placeholderStyle={{fontSize: 16, color: '#B0B0B0'}}
              selectedTextStyle={{color: '#000000', marginLeft: 5}}
              data={sexdata}
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="Select"
              placeholderTextColor="#B0B0B0"
              value={sexdata.name}
              onChange={item => {
                setGender({
                  id: item.id,
                  name: item.name,
                });
              }}
              //   renderRightIcon={() => (

              //   )}
              renderItem={(item, index, selected, onSelectItem) => (
                <>
                  <View
                    style={{
                      padding: 10,
                      flexDirection: 'row',
                      backgroundColor: '#ffffff',
                    }}>
                    <Text style={{color: '#6D6D6D', marginLeft: 10}}>
                      {item.name}
                    </Text>
                  </View>
                </>
              )}
            />
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#000000'}}>
              Qualification
            </Text>
          </View>

          <View style={{marginTop: 10}}>
            <Dropdown
              style={{
                borderWidth: 2,
                borderColor: '#B3B6B7',
                borderRadius: 4,
                padding: 12,
                marginTop: 0,
                backgroundColor: '#ffffff',
              }}
              placeholderStyle={{fontSize: 16, color: '#B0B0B0'}}
              selectedTextStyle={{color: '#000000', marginLeft: 5}}
              data={Qualifaicationdata}
              maxHeight={300}
              labelField="name"
              valueField="name"
              placeholder="Select"
              placeholderTextColor="#B0B0B0"
              value={Qualifaicationdata.name}
              onChange={item => {
                setqualification({
                  id: item.id,
                  name: item.name,
                });
              }}
              //   renderRightIcon={() => (

              //   )}
              renderItem={(item, index, selected, onSelectItem) => (
                <>
                  <View
                    style={{
                      padding: 10,
                      flexDirection: 'row',
                      backgroundColor: '#ffffff',
                    }}>
                    <Text style={{color: '#6D6D6D', marginLeft: 10}}>
                      {item.name}
                    </Text>
                  </View>
                </>
              )}
            />
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#000000'}}>
              DATE OF BIRTH
            </Text>
          </View>

          <TouchableOpacity
            style={{
              height: 48,
              borderWidth: 2,
              borderColor: '#B3B6B7',
              backgroundColor: '#ffffff',
              borderRadius: 4,
              marginTop: 10,
              padding: 12,
            }}
            onPress={() => setSelectpicker(true)}>
            {datee ? (
              <Text style={{color: 'black', fontSize: 14, fontWeight: '600'}}>
                {datee}
              </Text>
            ) : (
              <Text style={{color: '#B0B0B0', fontSize: 14, fontWeight: '400'}}>
                DD/MM/YYYYY
              </Text>
            )}
          </TouchableOpacity>
          {selectpicker && (
            <View>
              <DateTimePicker
                date={date}
                value={date}
                mode="date"
                onChange={handleDOBchange}
                maximumDate={new Date()}
                format={'YYYY-MM-DD'}
                displayFormat={'DD-MM-YYYY'}
              />
            </View>
          )}

          <View style={{marginTop: 20}}>
            <PasswordTextField
              name={'PASSWORD'}
              Placeholder={'password here'}
              type="text"
              value={inputPassword.value}
              sectext="false"
              errorText={inputPassword.message}
              onChangeText={text => validatePassword(text)}
            />
          </View>

          <View style={{marginTop: 20}}>
            <PasswordTextField
              name={' CONFIRM PASSWORD'}
              Placeholder={' Confirm password here'}
              type="text"
              value={inputConfirmPassword.value}
              sectext="false"
              errorText={inputConfirmPassword.message}
              onChangeText={text => validateconfirmPassword(text)}
            />
          </View>
          <View style={{width: '50%', alignSelf: 'center', marginTop: '12%'}}>
            {btndisable ? (
              <Button label={'Sign UP'} onPress={() => handleSignup()} />
            ) : (
              <Disablebutton label={'Sign UP'} />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignupScreen;
