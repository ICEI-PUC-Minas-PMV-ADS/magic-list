import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type ChecklistItemProps = {
  item: {
    key: string;
    name: string;
    completed: boolean;
  };
  removeItem: (key: string) => void;
  toggleCheckbox: (key: string) => void;
};

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, removeItem, toggleCheckbox }) => {

  const renderCheckbox = () => {
    return (
      <TouchableOpacity onPress={() => toggleCheckbox(item.key)}>
        <MaterialIcons
          name={item.completed ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color={item.completed ? '#00C851' : '#bdbdbd'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.itemContainer}>
      {renderCheckbox()}
      <Text style={[styles.itemText, item.completed && styles.completedItem]}>{item.name}</Text>
      <Button title="Remove" onPress={() => removeItem(item.key)} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  completedItem: {
    textDecorationLine: 'line-through',
  },
});

export default ChecklistItem;
