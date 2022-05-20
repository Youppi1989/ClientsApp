import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function Head({ nav }) {
  return (
    <TouchableOpacity onPress={() => nav.goBack()}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Image
          style={styles.image}
          source={require('../../../assets/LeftAccessory.png')}
        />
        <Image
          style={styles.image}
          source={require('../../../assets/EditSquare.png')}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 45,
    width: 42,
    height: 44,
  },
});
