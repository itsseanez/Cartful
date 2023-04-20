import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
    styles
} from './../components/styles';

const Signup = () => {
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [confirmPasswordText, setConfirmPasswordText] = useState('');
    const [responseData, setResponseData] = useState(" ");

    function handleNameChange(text) {
        setNameText(text);
    }

    function handleEmailChange(text) {
        setEmailText(text);
    }

    function handlePasswordChange(text) {
        setPasswordText(text);
    }

    function handleConfirmPasswordChange(text) {
        setConfirmPasswordText(text);
    }

    const handleGetRequest = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          const data = await response.json();
          setResponseData(data);
          Alert.alert(`Response data: ${JSON.stringify(data)}`);
        } catch (error) {
          console.error(error);
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
                        onChangeText={handleNameChange}
                        value={nameText}
                        placeholder= 'Full Name'
                    />

                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handleEmailChange}
                        value={emailText}
                        placeholder= 'Email'
                    />

                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handlePasswordChange}
                        value={passwordText}
                        placeholder= 'Password'
                        secureTextEntry={true}
                    />   

                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handleConfirmPasswordChange}
                        value={confirmPasswordText}
                        placeholder= 'Confirm Password'
                        secureTextEntry={true}
                    />                 
                </View>

                <Text style={styles.pageSubTitle}>By creating an account you agree to our Terms of Service and Privacy Policy</Text>
                <Pressable style={styles.button} onPress={handleGetRequest}>
                    <Text style={styles.text}>CONTINUE</Text>
                </Pressable>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default Signup;