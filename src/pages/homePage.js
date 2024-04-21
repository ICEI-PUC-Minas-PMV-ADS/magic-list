import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Body from '../components/body';
import Container from '../components/container';
import Header from '../components/header';

const HomePage = () => {

  return(
    <Container>
      <Header title={'Tela Principal'} />

      <Body>
        <Text style={styles.titleText}> Magic List </Text>

        <Text style={styles.subtitleText}> O melhor gerenciador de checklist! </Text>

        <Text style={styles.commomText}>  Transformando o caos em organização </Text>
      </Body>
   </Container>
  );
  
};

const styles = StyleSheet.create({
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


