import React from 'react';
import { View, StyleSheet, Text, Image,} from 'react-native';

export default function Photo({client}) {
console.log('client', client);
  return (
        <View style={{ alignItems: 'center' }}>
      <Image style={styles.photo} source={{ uri: client.image }}/>
</View>
  )
}



const styles = StyleSheet.create({
photo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginTop: 30,
  },
  });