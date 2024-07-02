import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Disablebutton = (props) => {
  return (
    <View onPress={props.onPress}>
      <LinearGradient colors={['#011D4550', '#011D4550']} style={styles.linear} >
        <Text style={styles.textstyle}>{props.label}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linear: {
    height: 49,
    borderRadius:8,
    padding:12,
 
  },
  textstyle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign:'center'
  },
});

export default Disablebutton;
