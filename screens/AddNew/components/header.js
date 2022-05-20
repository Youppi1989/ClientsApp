import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Button({ nav }) {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Image
          style={styles.image}
          source={require("../../../assets/Vector.png")}
        />
      </TouchableOpacity>
      <Text style={styles.text1}>Добавить нового</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  text1: {
    fontWeight: "bold",
    marginRight: 100,
    fontSize: 20,
    margin: 20,
  },
});
