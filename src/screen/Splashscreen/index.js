import React,{useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {StylesGloble} from '../../helper/GlobleCss';
import Imagepath from '../../constant/Imagepath';


const Splashscreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('BottomTab');
        }, 3000);
      }, []);
  return (
    <View style={StylesGloble.container}>
      <View>
        <View
     
          style={{height: '100%', width: '100%', position: 'relative',backgroundColor:'#F8CE58'}}>
          <View style={styles.viewstyle}>
            <Image
              source={Imagepath.skenu}
              style={{height: 93, width: 163}}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewstyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Splashscreen;
