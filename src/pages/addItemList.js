import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {insertListUnic, updateListUnic, deleteListUnic} from '../services/ListService';

import Body from '../components/body';
import Container from '../components/container';
import Header from '../components/header';

const AddItemList = ({route}) => {

  const [nameItem, setNameItem] = useState('');

  const navigation = useNavigation();
  const {item} = route.params? route.params : {};

  useEffect(() =>{
    if(item){
      setNameItem(item.nome)
    }
  }, [item]);

  const handleSalvar = () =>{
    if (item) {
      updateListUnic({
        nome: nameItem,
        id_list: item.id_list,
      }).then();
    } else {
      insertListUnic({
        nome: nameItem
      }).then();
    }

    navigation.goBack();
  }
  const handleEcluir = () =>{
    deleteListUnic(item.id_tarefa).then();
    navigation.goBack();
  }

  return(
    <Container>
      <Header title={'Adicionar Tarefa'} goBack={() => navigation.goBack()} />

      <Body>
        <Text style={styles.titleText}> Nova tarefa </Text>

        <Text style={styles.subtitleText}> Preencha os dados de uma tarefa </Text>

        <Text style={styles.commomText}> Preencha o campo abaixo com o nome desejado </Text> 

        <TextInput style={styles.inputAdd} placeholder="Digite o nome da tarefa aqui..." onChangeText={setNameItem} value={nameItem} />

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


export default AddItemList;