import React from "react";
import { View, StyleSheet, Text } from "react-native";
export default function BioTitle() {
  return <Text style={styles.biography}>Биография</Text>;
}

const styles = StyleSheet.create({
  biography: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 40,
    marginLeft: 10,
  },
});
