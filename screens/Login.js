import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
    styles
} from './../components/styles';

const Login = () => {
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    function handleEmailChange(text) {
        setEmailText(text);
    }

    function handlePasswordChange(text) {
        setPasswordText(text);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <View style={styles.innerContainer}>
                    <Text style={styles.pageTitle}>Cartful</Text>
                    <Text style={styles.pageSubTitle}>Login</Text>
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
                </View>

                <Pressable>
                    <Text style={styles.pageSubTitle}>Create Account</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => Alert.alert(`Hey ${emailText}`)}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default Login;