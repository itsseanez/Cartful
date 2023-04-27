import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet,ActivityIndicator, Text, View, SafeAreaView, TextInput, Button, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    styles
} from './../components/styles';

const Login = ({navigation}) => {
    const [usernameText, setUsernameText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    function handleUsernameChange(text) {
        setUsernameText(text);
    }

    function handlePasswordChange(text) {
        setPasswordText(text);
    }

    const handleLogin = async () => {
        try {
            const response = await fetch(`https://cartful.azurewebsites.net/account/GetAccount?username=${usernameText}&password=${passwordText}`)
            const user = await response.json();
            const userId=user.userId
            // Do something with the response data (e.g. save user token to async storage)
            //Alert.alert(`${JSON.stringify(userId)}`)
            if(user.userId!==undefined) {
                navigation.navigate('Home', {userId})
            }
        } catch (error) {
          console.error('Failed to log in:', error.message);
        }
      };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.pageTitle}>Cartful</Text>
                    <Text style={styles.pageSubTitle}>Login</Text>
                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handleUsernameChange}
                        value={usernameText}
                        placeholder= 'Username'
                    />
                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handlePasswordChange}
                        value={passwordText}
                        placeholder= 'Password'
                        secureTextEntry={true}
                    />                  
                </View>

                <Pressable onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.pageSubTitle}>Create Account</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => handleLogin()}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default Login;