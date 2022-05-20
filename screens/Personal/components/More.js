import React from "react";
import { View, StyleSheet, Text, Image, SafeAreaView } from "react-native";

export default function More() {
  return (
    <SafeAreaView style={styles.more}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 19,
          alignItems: "center",

          color: "white",
        }}
      >
        Показать больше{" "}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  more: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 19,
    backgroundColor: "coral",
    borderRadius: 16,
    height: 52,
    marginTop: 250,
    marginRight: 52,
    marginLeft: 52,
  },
});
