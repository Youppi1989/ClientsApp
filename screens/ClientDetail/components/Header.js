import React from 'react';
import { View, StyleSheet, Text,  } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Клиенты</Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
    header: {
    marginTop:60,
    marginBottom:20,
  },
    text1: {
    fontWeight: 'bold',
    marginLeft: 14,
    fontSize: 30
  },
});

