import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const data = new Array(8).fill(null).map((_, index) => ({
  id: index,
  name: `Lista ${index + 1}`,
}));

const ChecklistMenu = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('ChecklistPage')}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.startBar}>
    </TouchableOpacity>
      <Text style={styles.title}>LISTA DE CHECKLISTS</Text>
      <View style={styles.backgroundList}> 
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D1D1D1',
    alignItems: 'center',
  },
  startBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    marginTop: 30,
  },
  backgroundList: {
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
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
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChecklistMenu;
