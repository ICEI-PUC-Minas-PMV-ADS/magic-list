import React from 'react';
import {StyleSheet, View} from 'react-native';

const Body = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#D1D1D1',
    alignItems: 'center', 
  },
});

export default Body;