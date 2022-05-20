import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Add(props) {
  return (
    <View style={styles.call}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: 'white',
          }}>
          {props.text}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  call: {
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 15,
    height: 50,
    backgroundColor: '#FB7360',
    width: '70%',
    justifyContent: 'center',
  },
});
