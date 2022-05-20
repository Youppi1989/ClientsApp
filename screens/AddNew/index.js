import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import Edit from "./components/edit";
import Add from "./components/add";
import Button from "./components/header";
import clients from "../../data/clients";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AddNew({ navigation, route }) {
  const [newClients, setClients] = React.useState(clients);
  const [img, onChangeImg] = React.useState(null);
  const [name_surname, onChangeNameSurname] = React.useState();
  const [phone, onChangePhone] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);
  const [bio, onChangeBio] = React.useState(null);

  const onAddClient = route.params.addClient;

  console.log("onAddClient", onAddClient);
  const addClient = () => {
    console.log("privet");
    try {
      const names = name_surname?.split(" ");
      console.log("names", names);

      const client = {
        id: newClients.length,
        name: names?.length > 1 ? names[1] : "",
        surname: names?.length > 0 ? names[0] : "",
        city: city,
        image: img,
        bio: bio,
        phone: phone,
        active: 1,
      };
      console.log("here");
      console.log(client);
      onAddClient(client);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Button nav={navigation} />
        <Edit
          text="Фото"
          inside="Вставьте ссылку на фото"
          value={img}
          onChangeValue={onChangeImg}
        />
        <Edit
          text="ФИО"
          inside="Введите фамилию и имя"
          value={name_surname}
          onChangeValue={onChangeNameSurname}
        />
        <Edit
          text="Номер телефона"
          inside="+7(800)-000-00-00"
          value={phone}
          onChangeValue={onChangePhone}
        />
        <Edit
          text="Город"
          inside="Выберите город"
          value={city}
          onChangeValue={onChangeCity}
        />
        <Edit
          text="Био"
          inside="Укажите хобби, интересы, образование и стаж работы"
          multiline={true}
          value={bio}
          onChangeValue={onChangeBio}
        />
        <TouchableOpacity style={styles.add} onPress={() => addClient()}>
          <Add text="Добавить" />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  add: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 19,
    backgroundColor: "white",
    borderRadius: 16,
    height: 52,
    marginBottom: 25,
    marginTop: 200,
  },
});
