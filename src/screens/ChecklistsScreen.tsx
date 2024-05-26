import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import RenameChecklistModal from '../components/RenameChecklistModal';
import { MaterialIcons } from '@expo/vector-icons';

type ChecklistsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Checklists'>;

type Props = {
  navigation: ChecklistsScreenNavigationProp;
};

type ChecklistType = {
  id: string;
  name: string;
};

const ChecklistsScreen: React.FC<Props> = ({ navigation }) => {
  const [checklists, setChecklists] = useState<ChecklistType[]>([]);
  const [newChecklist, setNewChecklist] = useState('');
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [currentChecklistId, setCurrentChecklistId] = useState('');
  const [currentChecklistName, setCurrentChecklistName] = useState('');

  useEffect(() => {
    const loadChecklists = async () => {
      const storedChecklists = await AsyncStorage.getItem('checklists');
      if (storedChecklists) {
        setChecklists(JSON.parse(storedChecklists));
      }
    };
    loadChecklists();
  }, []);

  const saveChecklists = async (newChecklists: ChecklistType[]) => {
    await AsyncStorage.setItem('checklists', JSON.stringify(newChecklists));
    setChecklists(newChecklists);
  };

  const addChecklist = () => {
    if (newChecklist.trim().length > 0) {
      const updatedChecklists = [...checklists, { id: Date.now().toString(), name: newChecklist }];
      saveChecklists(updatedChecklists);
      setNewChecklist('');
    }
  };

  const removeChecklist = (id: string) => {
    const updatedChecklists = checklists.filter(checklist => checklist.id !== id);
    saveChecklists(updatedChecklists);
  };

  const renameChecklist = (id: string, newName: string) => {
    const updatedChecklists = checklists.map(checklist => {
      if (checklist.id === id) {
        return { ...checklist, name: newName };
      }
      return checklist;
    });
    saveChecklists(updatedChecklists);
  };

  const navigateToChecklist = (checklistId: string, checklistName: string) => {
    navigation.navigate('Checklist', { checklistId, checklistName } as { checklistId: string; checklistName: string });
  };  

  const handleDeleteChecklist = (id: string) => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja excluir esta checklist?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Confirmar', onPress: () => removeChecklist(id) },
      ],
      { cancelable: false }
    );
  };

  const handleRenameChecklist = (id: string, currentName: string) => {
    setCurrentChecklistId(id);
    setCurrentChecklistName(currentName);
    setShowRenameModal(true);
  };

  const handleSaveRenamedChecklist = (newName: string) => {
    renameChecklist(currentChecklistId, newName);
    setShowRenameModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checklists</Text>
      <TextInput
        style={styles.input}
        placeholder="Novo Checklist"
        value={newChecklist}
        onChangeText={setNewChecklist}
      />
      <TouchableOpacity style={styles.button} onPress={addChecklist} >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <FlatList
        data={checklists}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToChecklist(item.id, item.name)}>
            <View style={styles.checklistItemContainer}>
              <Text style={styles.checklistItem}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleRenameChecklist(item.id, item.name)}>
                <MaterialIcons name="edit" size={24} color="#6200EE" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteChecklist(item.id)}>
                <MaterialIcons name="delete" size={24} color="#6200EE" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <RenameChecklistModal
        visible={showRenameModal}
        currentName={currentChecklistName}
        onClose={() => setShowRenameModal(false)}
        onSave={handleSaveRenamedChecklist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
     backgroundColor: '#D1D1D1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  checklistItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
  checklistItem: {
    fontSize: 18,
    flex: 1,
  },
  actionButton: {
    fontSize: 16,
    color: '#4682B4',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default ChecklistsScreen;
