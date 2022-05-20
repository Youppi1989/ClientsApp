import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  Linking
 
} from 'react-native';

import BioTitle from './components/BioTitle';
import More from './components/More';
import Head from './components/Head';
import Photo from './components/Photo';
import Button1 from './components/Button';
import TextBio from './components/TextBio';

export default function Personal({ navigation, route }) {
  console.log('route', route);
  const { client } = route.params;
  console.log('client', client);

  return (
    <SafeAreaView style={styles.container}>
      <Head nav={navigation} />
      <Photo client={client} />
      <Text style={styles.name}>
        {client?.name} {client?.surname}
      </Text>
      <Text style={styles.city}>{client?.city}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Button1 text="Чат" accent onPress={() => Linking.openURL('https://wa.me/79216118547')}/>
        <Button1 text="Звонок"onPress={() => Linking.openURL('tel:+7921888987')}/>
      </View>
      <BioTitle />
      <Text style={styles.textbio}>{client.bio}</Text>
      <More />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 10,
  },

  city: {
    textAlign: 'center',
    fontSize: 15,
    color: 'grey',
    marginBottom: 20,
  },
  
  textbio: {
    color: 'grey',
    fontSize: 20,
    marginTop: 8,
    marginLeft: 10,
  },
});
