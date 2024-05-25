import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ChecklistItem from '../components/ChecklistItem';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type ChecklistScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Checklist'>;

type Props = {
  navigation: ChecklistScreenNavigationProp;
  route: {
    params: {
      checklistId: string;
      checklistName: string;
    };
  };
};

type ChecklistItemType = {
  key: string;
  name: string;
  completed: boolean;
};

type ChecklistType = {
  id: string;
  name: string;
  items: ChecklistItemType[];
};

const ChecklistScreen: React.FC<Props> = ({ navigation, route }) => {
  const [checklist, setChecklist] = useState<ChecklistType | null>(null);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const loadChecklist = async () => {
      const storedChecklist = await AsyncStorage.getItem(`checklist_${route.params.checklistId}`);
      if (storedChecklist) {
        setChecklist(JSON.parse(storedChecklist));
      } else {
        const newChecklist: ChecklistType = {
          id: route.params.checklistId,
          name: route.params.checklistName,
          items: [],
        };
        setChecklist(newChecklist);
        saveChecklist(newChecklist);
      }
    };
    loadChecklist();
  }, [route.params.checklistId, route.params.checklistName]);

  useEffect(() => {
    navigation.setOptions({ title: route.params.checklistName });
  }, [route.params.checklistName, navigation]);

  const saveChecklist = async (checklist: ChecklistType) => {
    await AsyncStorage.setItem(`checklist_${checklist.id}`, JSON.stringify(checklist));
  };

  const addItemToChecklist = () => {
    if (newItem.trim().length > 0) {
      const newItemObject: ChecklistItemType = {
        key: Date.now().toString(),
        name: newItem,
        completed: false,
      };
      const updatedChecklist = { ...checklist!, items: [...checklist!.items, newItemObject] };
      setChecklist(updatedChecklist);
      saveChecklist(updatedChecklist);
      setNewItem('');
    }
  };

  const removeItem = (key: string) => {
    const updatedItems = checklist!.items.filter(item => item.key !== key);
    const updatedChecklist = { ...checklist!, items: updatedItems };
    setChecklist(updatedChecklist);
    saveChecklist(updatedChecklist);
  };

  const toggleCheckbox = (key: string) => {
    const updatedItems = checklist!.items.map(item => {
      if (item.key === key) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    const updatedChecklist = { ...checklist!, items: updatedItems };
    setChecklist(updatedChecklist);
    saveChecklist(updatedChecklist);
  };

  if (!checklist) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.title}>{checklist.name}</Text>}
        ListHeaderComponentStyle={styles.listHeader}
        data={checklist.items}
        renderItem={({ item }) => (
          <ChecklistItem item={item} removeItem={removeItem} toggleCheckbox={toggleCheckbox} />
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Novo Item"
        value={newItem}
        onChangeText={setNewItem}
      />
      <TouchableOpacity style={styles.button} onPress={addItemToChecklist} >
        <Text style={styles.buttonText}>Adicionar Item</Text>
      </TouchableOpacity>
      
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
  listHeader: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#4682B4',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default ChecklistScreen;
