import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import RenameChecklistModal from '../components/RenameChecklistModal';

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

  const navigateToChecklist = (checklistId: string) => {
    navigation.navigate('Checklist', { checklistId });
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
      <Button title="Criar Checklist" onPress={addChecklist} />
      <FlatList
        data={checklists}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToChecklist(item.id)}>
            <View style={styles.checklistItemContainer}>
              <Text style={styles.checklistItem}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleRenameChecklist(item.id, item.name)}>
                <Text style={styles.editButton}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteChecklist(item.id)}>
                <Text style={styles.deleteButton}>Excluir</Text>
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
  checklistItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  checklistItem: {
    fontSize: 18,
  },
  editButton: {
    color: 'blue',
    marginLeft: 8,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 8,
  },
});

export default ChecklistsScreen;
