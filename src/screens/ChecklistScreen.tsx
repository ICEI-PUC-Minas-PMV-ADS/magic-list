import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChecklistItem from '../components/ChecklistItem';

type ChecklistItemType = {
  key: string;
  name: string;
  completed: boolean;
};

const ChecklistScreen: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistItemType[]>([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const loadChecklist = async () => {
      const storedChecklist = await AsyncStorage.getItem('checklist');
      if (storedChecklist) {
        setChecklist(JSON.parse(storedChecklist));
      }
    };
    loadChecklist();
  }, []);

  const saveChecklist = async (newChecklist: ChecklistItemType[]) => {
    await AsyncStorage.setItem('checklist', JSON.stringify(newChecklist));
    setChecklist(newChecklist);
  };

  const addItem = () => {
    if (newItem.trim().length > 0) {
      const updatedChecklist = [...checklist, { key: Date.now().toString(), name: newItem, completed: false }];
      saveChecklist(updatedChecklist);
      setNewItem('');
    }
  };  

  const removeItem = (key: string) => {
    const updatedChecklist = checklist.filter(item => item.key !== key);
    saveChecklist(updatedChecklist);
  };

  const toggleCheckbox = (key: string) => {
    const updatedChecklist = checklist.map(item => {
      if (item.key === key) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    saveChecklist(updatedChecklist);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checklist</Text>
      <TextInput
        style={styles.input}
        placeholder="New Item"
        value={newItem}
        onChangeText={setNewItem}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={checklist}
        renderItem={({ item }) => (
          <ChecklistItem item={item} removeItem={removeItem} toggleCheckbox={toggleCheckbox} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default ChecklistScreen;
