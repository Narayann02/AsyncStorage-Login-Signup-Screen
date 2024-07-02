import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';


const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.linear} >
        <Text style={styles.textstyle}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linear: {
    height: 49,
    borderRadius:4,
    padding:15,
    backgroundColor:'#011D45'
  },
  textstyle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#ffffff',
    textAlign:'center'
  },
});

export default Button;
