import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Header from './components/Header';
import ClientItem from './components/clientitem';
import Button from './components/button';
import Search from './components/search';
import { NavigationContainer } from '@react-navigation/native';
import clientsData from '../../data/clients';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClientDetail({ navigation }) {
  const [clients, setClients] = useState(clientsData);
  const [filteredClients, setFilteredClients] = useState();
  const [search, setSearch] = useState();

  const saveClients = () => {
    const jsonValue = JSON.stringify(clients)
    AsyncStorage.setItem('clients', jsonValue)
  }

  const getClients = async () => {
    console.log('in getClients');
    const jsonClients = await AsyncStorage.getItem('clients');
    console.log('after await');
    const ourClients = jsonClients ? JSON.parse(jsonClients) : clientsData;
    console.log('storage name', ourClients);
    return ourClients;
  }

  const onLoad = async () => {
    const clientsFromStorage = await getClients();
    setClients (clients)
  };

  useEffect(() => {
    onLoad();
  }, []);

  const isStringContain = (text, containedText) => {
    return text.toUpperCase().includes(containedText.toUpperCase());
  }

  const filterArray = useCallback(() => {
    const newClients = [];
    for (let i = 0; i < clients?.length; i++) {
      const client = clients[i];
      if (!search || isStringContain(client.city, search)) {
        newClients.push(client);
      }
    }
    setFilteredClients(newClients);
  }, [clients, search]);

  useEffect(() => {
    console.log('search changed', search);
    filterArray();
  }, [search, clients, filterArray]);

  const addClient = (client) => {
    const newClients = [...clients,client];
    saveClients(newClients);
    setClients(newClients);
  };
  
  const onPressItem = (client) => navigation.navigate('Personal', { client });

  const renderItem = ({ item }) => (
    <ClientItem
      client={item}
      nav={navigation}
      onPress={(item) => onPressItem(item)}
    />
  );
  const onPress = () => navigation.navigate('AddNew', { addClient });

  return (
    <View style={styles.container}>
      <Header />
      <Search text inside="Поиск" value={search} onChangeValue={setSearch} />
      <FlatList data={filteredClients} renderItem={renderItem} />
      <Button navigation={navigation} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
