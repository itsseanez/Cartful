import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text,ActivityIndicator, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import List from './screens/List'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
        <Stack.Screen name="List" component={List}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

