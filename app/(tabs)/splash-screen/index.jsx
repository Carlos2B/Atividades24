import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import {vh, vw} from 'react-native-expo-viewport-units';
import {LinearGradient} from 'expo-linear-gradient';


export default splashScreen = () => {
    return (
    
      <View style={styles.container}>
        <LinearGradient  colors={['#ff7e5f', '#feb47b']} 
    style={styles.container}>
        <Image
         source={require('../../../assets/images/logo.png')}
          style={styles.image}
        />
        </LinearGradient>
      </View>
      
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
      },

      background:{
        position: 'absolute',
        width: vw(100),
        height: vh(100),
        left:0,
        right: 0,
        bottom: 0,
        top: 0,
      },
     
      image: {
        width: vw(32),
        height: vh(30),
        borderRadius: 200,
        backgroundColor: 'transparent',
      },
})
