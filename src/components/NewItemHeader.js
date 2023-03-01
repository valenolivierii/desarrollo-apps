import { StyleSheet, TextInput, View, Button, Dimensions } from "react-native";
import React from "react";

const NewItemHeader = ({
  onChangeText,
  itemText,
  addItemToState
}) => {
  return (
    <View style={styles.addItemInputContainer}>
      <TextInput
        placeholder="Agregue una tarea"
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
      />
      <Button
        title="Agregar"
        onPress={addItemToState}
        color="#EF7F3F"
      />
    </View>
  );
};

export default NewItemHeader;

const styles = StyleSheet.create({
  addItemInputContainer: {
    width: Dimensions.get('window').width,
    marginTop: 50,
    marginBottom: 40,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 250,
    color:'#1D300F',
    borderBottomColor: "#1D300F",
    borderBottomWidth: 1,
  },
});