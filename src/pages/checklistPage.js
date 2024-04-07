import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChecklistItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, item.checked && styles.checked]}>
    <Text>{item.name}</Text>
  </TouchableOpacity>
);

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, name: ' 1', checked: false },
    { id: 2, name: 'Item 2', checked: false },
    { id: 3, name: 'Item 3', checked: false },
  ]);

  const toggleItem = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    }));
  };

  return (
     <View style={styles.container}>

    <TouchableOpacity style={styles.startBar}>
    </TouchableOpacity>
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ChecklistItem
          item={item}
          onPress={() => toggleItem(item.id)}
        />
      )}
      keyExtractor={item => item.id.toString()}
      style={styles.list} // Use the new style for FlatList
    />
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D1D1D1',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  startBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
  },
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
});

export default Checklist;