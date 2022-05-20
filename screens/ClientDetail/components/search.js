import React from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';

export default function Search(props) {
  return (
    <View style={styles.field}>
      <Image
        style={styles.image}
        source={require('../../../assets/search.png')}
      />
      <TextInput
        style={styles.input}
        placeholder={props.inside}
        value={props.value}
        onChangeText={props.onChangeValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 12,
    borderRadius: 13,
  },

  image: {
    height: 18,
    width: 18,
    marginLeft: 12,
  },

  input: {
    fontSize: 19,
    height: 50,
    padding: 10,
    width: 360,
    marginLeft: 12,
    marginRight: 45,
  },
});
