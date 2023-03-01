import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Modal, NewItemHeader, ListItem } from './src/components';

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    if (itemText !== "") {
      const newArr = [...items, { id: Date.now(), value: itemText }];
      setItems(newArr);
      setItemText("");
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <View style={styles.screenContainer}>
      <NewItemHeader
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToState={addItemToState}
      />
      <ListItem items={items} openModal={openModal} />
      <Modal
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
      />
      <StatusBar style="auto" />
      {items.length !== 0 &&
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}> *Toque algun item para marcar la tarea como realizada</Text>
          <Text style={styles.instructions}> **Mantenga para eliminarla</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#E9F9E6',
  },
  instructionsContainer: {
    padding: 20
  },
  instructions: {
    textAlign: "center",
    marginBottom: 10,
    color: "#1D300F"
  }
});
