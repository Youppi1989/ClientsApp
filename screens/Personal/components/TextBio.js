import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default function TextBio({client}) {
  return (
  <Text style={styles.textbio}></Text>   
   
  )
}




const styles = StyleSheet.create({
  textbio: {
    color: 'grey',
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10,
  },
  });