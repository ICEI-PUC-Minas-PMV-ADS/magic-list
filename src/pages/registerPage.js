import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterPage = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);

      alert('Registration successful!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Cadastro</Text>

      <Text style={styles.commomText}>Email</Text>
      <TextInput
        style={styles.inputLogin}
        placeholder="Digite seu email"
        onChangeText={setEmail}
        value={email}
      />

      <Text style={styles.commomText}>Senha</Text>
      <TextInput
        style={styles.inputLogin}
        placeholder="Digite sua senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.buttonLogin} onPress={handleRegister}>
        <Text style={styles.textButton}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  commomText: {
    fontSize: 16,
    marginBottom: 8,
  },
  inputLogin: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: '100%',
  },
  buttonLogin: {
    backgroundColor: '#6200EE',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterPage;
