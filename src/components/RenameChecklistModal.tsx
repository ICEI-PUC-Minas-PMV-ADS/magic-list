import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';

type RenameChecklistModalProps = {
  visible: boolean;
  currentName: string;
  onClose: () => void;
  onSave: (newName: string) => void;
};

const RenameChecklistModal: React.FC<RenameChecklistModalProps> = ({ visible, currentName, onClose, onSave }) => {
  const [newName, setNewName] = useState(currentName);

  const handleSave = () => {
    if (newName.trim().length === 0) {
      alert('O nome não pode ser vazio!');
      return;
    }
    onSave(newName);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
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
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
              <Text style={[styles.buttonText, styles.saveButtonText]}>Salvar</Text>
            </TouchableOpacity>
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
    borderRadius: 16,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    marginRight: 8,
    backgroundColor: '#ccc',
  },
  saveButton: {
    marginLeft: 8,
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  saveButtonText: {
    fontWeight: 'bold',
  },
});

export default RenameChecklistModal;
