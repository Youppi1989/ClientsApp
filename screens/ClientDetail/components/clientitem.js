import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Active,
  TouchableOpacity,
} from "react-native";

export default function ClientItem(props) {
  const client = props.client;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.nav.navigate("Personal", { client })}
    >
      <View style={styles?.clients}>
        <View style={{ height: 55 }}>
          <Image style={styles.photo} source={{ uri: client?.image }}></Image>
          {client.active ? <View style={styles.active}></View> : false}
        </View>
        <View style={{ width: "70%" }}>
          <Text style={styles.name}>{client.name + " " + client.surname}</Text>
          <Text style={styles.city}>{client.city}</Text>
        </View>
        <Image
          style={styles.arrow}
          source={require("../../../assets/Arrow.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  clients: {
    flexDirection: "row",
    alignItems: "center",
    margin: 19,
    padding: 25,
    height: 80,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 1,
  },

  photo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },

  active: {
    position: "absolute",
    fontSize: 10,
    width: 12,
    height: 12,
    backgroundColor: "green",
    borderRadius: 5,
    bottom: 1,
    right: 2,
  },

  name: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 20,
    margin: 3,
  },

  city: {
    marginLeft: 3,
    fontSize: 15,
    color: "grey",
    lineHeight: 18,
  },

  arrow: {
    height: 14,
    width: 8,
    right: 25,
    top: 40,
    position: "absolute",
  },
});
