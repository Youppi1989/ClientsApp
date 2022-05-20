import React from "react";
import { View, Image, StyleSheet, Text, TextInput } from "react-native";

export default function Edit(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text3}>{props.text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeValue}
        value={props.value}
        placeholder={props.inside}
        multiline={props.multiline}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text3: {
    margin: 10,
    marginLeft: 19,
    fontSize: 12,
    color: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderRadius: 15,
    height: 50,
    padding: 10,
    backgroundColor: "lightgrey",
    marginLeft: 14,
    marginRight: 14,
  },
});
