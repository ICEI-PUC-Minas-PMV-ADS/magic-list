import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import RegisterPage from './registerPage';

import Body from '../components/body';
import Container from '../components/container';
import Header from '../components/header';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const navigation = useNavigation();


  return(
    <Container>
      <Header title={'Tela de login'} />

      <Body>
        <Text style={styles.titleText}> Magic List </Text>

        <Text style={styles.subtitleText}> O melhor gerenciador de checklist! </Text>
        
        <Text style={styles.commomText}> Preencha o campo abaixo com o seu e-mail </Text>

        <TextInput style={styles.inputLogin} placeholder="Digite seu e-mail aqui..." onChangeText={setEmail} value={email} />

        <Text style={styles.commomText}> Preencha o campo abaixo com a sua senha </Text> 

        <TextInput style={styles.inputLogin} placeholder="Digite sua senha aqui..." onChangeText={setPassword} value={password} />

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.textButton}>Logar-se</Text>
        </TouchableOpacity>
      </Body>
   </Container>

  );
  
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '900',
  },
  subtitleText: {
    fontSize: 20,
    marginBottom: 100,
    textAlign: 'center',
    fontWeight: '400',
  },
  commomText: {
    fontSize: 15,
    marginTop: 7,
    marginBottom: 4,
    textAlign: 'center',
    fontWeight: 'normal',
  },
  inputLogin: {
    height: 28,
    borderWidth: 1,
    padding: 8,
    margin: 7,
    marginBottom: 10,
    borderRadius: 9,
    width: '80%', 
  },
  buttonLogin: {
    borderRadius: 9,
    marginTop: 25,
    width: 220,
    alignItems: 'center',
    backgroundColor: '#6200EE',
    padding: 10,
    justifyContent: 'center', 
  },
  textButton:{
    color: 'white',
  },
});


export default LoginPage;