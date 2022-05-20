import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ navigation, onPress }) {

  return (
    <View style={styles.button2}>
      <TouchableOpacity
        onPress={onPress}>
        <Text style={styles.more}>Добавить нового</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
    marginLeft: 19,
    backgroundColor: '#FB7360',
    borderRadius: 16,
    height: 52,
    marginBottom: 25,
    marginTop: 200,
  },

  more: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
});
