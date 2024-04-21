import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Body from '../components/body';
import Container from '../components/container';
import Header from '../components/header';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      if (email === storedEmail && password === storedPassword) {
        alert('Sucesso: Login efetuado com sucesso!');
      } else {
        alert('Email ou senha incorretos.');
      }
    } catch (error) {
      // Error retrieving data
      console.log('Error retrieving data:', error);
    }
  };

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

        <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
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
  redirectButton: {
    fontWeight: '100',
    width: 330,
    alignItems: 'center',
    backgroundColor: '#D1D1D1',
    padding: 7
  },
  redirectText: {
    color: '#0363ff'
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