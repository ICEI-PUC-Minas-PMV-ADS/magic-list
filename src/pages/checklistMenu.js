import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';

import Body from '../components/body';
import Container from '../components/container';
import Header from '../components/header';

import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

import {getCheckList} from '../services/CheckListService';

const ChecklistMenu = () => {
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [checklist, setChecklist] = useState([]);

  useEffect(() =>{
    getCheckList().then((dados) =>{
      setChecklist(dados)
    })
  }, [isFocused])
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Checklist')}>
      <Text style={styles.textButton}>{item.nome}</Text>
      <Text style={styles.textEdit} onPress={() => navigation.navigate('Adicionar Checklist', {item})}> Editar </Text>
    </TouchableOpacity>
  );

  return (
    <Container>
      <Header title={'Lista de checklists'} />

      <Body>
         <Text style={styles.title}>Selecione a lista desejada</Text>
      {
        checklist.length > '0' &&
        <View style={styles.backgroundList}> 
        <FlatList
          data={checklist}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
        </View>}
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('Adicionar Checklist')}
        />
      </Body>
   </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  backgroundList: {
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
    height: '90%',
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20, 
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    margin: 10,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textEdit:{
    fontSize: 13,
    marginTop: 6,
    color: 'blue'
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default ChecklistMenu;
