import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import { createStore } from 'redux'
import LoginPage from './src/LoginPage'
import MainPage from './src/MainPage'
import DetailProvinsi from './src/DetailProvinsi'
import Profile from './src/Profile'

const reducer = (state, action) => {
  return state
}
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
let date = new Date
let tanggal = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
const initialState = {
  indonesia: {},
  list_provinsi : {},
  isLoading: true,
  isError: false,
  tanggal
}

const store = createStore(reducer, initialState)

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name='Login' component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={MainPage} options={{ headerTitle: 'Data Covid' }} />
        <Stack.Screen name='Detail' component={DetailProvinsi} options={{ headerTitle: 'Data Covid Per Provinsi' }} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 40
  }
});
