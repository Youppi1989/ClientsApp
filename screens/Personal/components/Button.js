import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function Button1({ text, accent,onPress}) {
  return (
    <View style={accent ? styles.chat : styles.call}>
      <TouchableOpacity
        onPress = {onPress}>
         <Text style={accent ? styles.text1 : styles.text2}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FB7360',
    lineHeight: 20,
  },

  text2: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    lineHeight: 20,
  },

  chat: {
    fontFamily: 'Poppins',
    borderColor: '#FB7360',
    borderWidth: 1.5,
    borderRadius: 16,
    flex: 0.96,
    height: 52,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  call: {
    backgroundColor: '#FB7360',
    borderRadius: 16,
    flex: 1,
    height: 52,
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
