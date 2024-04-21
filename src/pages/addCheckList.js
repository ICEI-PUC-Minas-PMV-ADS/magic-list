import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {insertCheckList, updateChecklist, deleteChecklist} from '../services/CheckListService';

import Body from '../components/body';
import Container from '../components/container';
import Header from '../components/header';

const AddChecklist = ({route}) => {

  const [nameCheck, setNameCheck] = useState('');

  const navigation = useNavigation();
  const {item} = route.params? route.params : {};

  useEffect(() =>{
    if(item){
      setNameCheck(item.nome)
    }
  }, [item]);

  const handleSalvar = () =>{
    if (item) {
      updateChecklist({
        nome: nameCheck,
        id_list: item.id_list,
      }).then();
    } else {
      insertCheckList({
        nome: nameCheck
      }).then();
    }

    navigation.goBack();
  }
  const handleEcluir = () =>{
    deleteChecklist(item.id_list).then();
    navigation.goBack();
  }

  return(
    <Container>
      <Header title={'Adicionar Checklist'} goBack={() => navigation.goBack()} />

      <Body>
        <Text style={styles.titleText}> Nova checklist </Text>

        <Text style={styles.subtitleText}> Preencha os dados de uma checklist </Text>

        <Text style={styles.commomText}> Preencha o campo abaixo com o nome desejado </Text> 

        <TextInput style={styles.inputAdd} placeholder="Digite o nome aqui..." onChangeText={setNameCheck} value={nameCheck} />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleSalvar}>
          <Text style={styles.textButton}>SALVAR!</Text>
        </TouchableOpacity>

        {
          item && 
          <TouchableOpacity style={styles.buttonExclude} onPress={handleEcluir}>
          <Text style={styles.textButton}>Excluir!</Text>
          </TouchableOpacity>
        }
        

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
  inputAdd: {
    height: 40,
    borderWidth: 1,
    padding: 8,
    margin: 7,
    marginBottom: 10,
    borderRadius: 9,
    width: '80%', 
  },
  buttonAdd: {
    borderRadius: 9,
    marginTop: 25,
    width: 220,
    alignItems: 'center',
    backgroundColor: '#6200EE',
    padding: 10,
    justifyContent: 'center', 
  },
  buttonExclude: {
    borderRadius: 9,
    marginTop: 25,
    width: 220,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
    justifyContent: 'center', 
  },
  textButton:{
    color: 'white',
  },
});


export default AddChecklist;