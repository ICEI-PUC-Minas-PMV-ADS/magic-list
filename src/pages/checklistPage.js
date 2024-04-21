import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';

import Body from '../components/body';
import Container from '../components/container';
import Header from '../components/header';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import { getListUnic } from '../services/ListService';

const ChecklistItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, item.checked && styles.checked]}>
    <Text>{item.nome}</Text>
  </TouchableOpacity>
);

const Checklist = () => {
  const [items, setItems] = useState([]);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() =>{
    getListUnic().then((dados) =>{
      setItems(dados.map(item => ({ ...item, checked: false }))); 
    })
  }, [isFocused])

  const toggleItem = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    }));
  };

  return (
     <Container>
      <Header title={'Checklist'} goBack={() => navigation.goBack()} />

          <Body>
            <FlatList
              data={items}
              renderItem={({ item }) => (
            <ChecklistItem
              item={item}
                onPress={() => toggleItem(item.id)}
              />
            )}
              style={styles.list} 
            />
            <FAB
              icon="plus"
              style={styles.fab}
              onPress={() => navigation.navigate('Adicionar Item')}
            />
      </Body>
   </Container>
  
  );
};

const styles = StyleSheet.create({
  list: { 
    position: 'absolute',
    width: '100%' 
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  checked: {
    backgroundColor: '#e1ffe1',
    borderColor: '#8aff8a',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Checklist;
