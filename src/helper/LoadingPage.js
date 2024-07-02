import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet,View, Animated,ImageBackground,Image,ActivityIndicator } from 'react-native';

const LoadingPage= () => {
    return (
        <View style={styles.container}>
            {/* <FastImage  style={{ width: 70, height: 70 }}   source={ImagePath.Loadingimg}   resizeMode={FastImage.resizeMode.contain} /> */}
            <ActivityIndicator size={'large'} color={'#FF8900'}/>
       </View>
    )}

const styles = StyleSheet.create({
   
    container: {
        backgroundColor: '#ffffff6b',
        height:"100%",
        width:"88%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagetag:{
        height: '20%',
        width: '20%',
    }
})

export default LoadingPage;