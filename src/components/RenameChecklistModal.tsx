import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, Text } from 'react-native';

type RenameChecklistModalProps = {
  visible: boolean;
  currentName: string;
  onClose: () => void;
  onSave: (newName: string) => void;
};

const RenameChecklistModal: React.FC<RenameChecklistModalProps> = ({ visible, currentName, onClose, onSave }) => {
  const [newName, setNewName] = useState(currentName);

  const handleSave = () => {
    onSave(newName);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Renomear Checklist</Text>
          <TextInput
            style={styles.input}
            placeholder="Novo nome"
            value={newName}
            onChangeText={setNewName}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancelar" onPress={onClose} color="gray" />
            <Button title="Salvar" onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default RenameChecklistModal;
