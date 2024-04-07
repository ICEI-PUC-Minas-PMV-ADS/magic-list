import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomePage = () => {

  return(
    <View style={styles.container}>

    <TouchableOpacity style={styles.startBar}>
    </TouchableOpacity>

    <Text style={styles.titleText}> Magic List </Text>

    <Text style={styles.subtitleText}> O melhor gerenciador de checklist! </Text>

    <Text style={styles.commomText}>  Transformando o caos em organização </Text>

    <Text style={styles.commomText}>  um checklist de cada vez  </Text>

    </View>
  );
  
};

const styles = StyleSheet.create({
  startBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#D1D1D1',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  titleText: {
    fontSize: 60,
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '900',
  },
  subtitleText: {
    fontSize: 28,
    marginBottom: 50,
    textAlign: 'center',
    fontWeight: '400',
  },
  commomText: {
    fontSize: 20,
    marginTop: 7,
    marginBottom: 4,
    textAlign: 'center',
    fontWeight: 'normal',
  },
});


export default HomePage;


