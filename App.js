import React from "react";
import ClientDetail from "./screens/ClientDetail";
import AddNew from "./screens/AddNew";
import Personal from "./screens/Personal";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClientDetail" component={ClientDetail} />
      <Stack.Screen name="AddNew" component={AddNew} />
      <Stack.Screen name="Personal" component={Personal} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
