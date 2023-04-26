import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
    styles
} from './../components/styles';

const Signup = () => {
    const [firstNameText, setFirstNameText] = useState('');
    const [lastNameText, setLastNameText] = useState('');
    const [userNameText, setUserNameText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [phoneText, setPhoneText] = useState('');

    function handleFirstNameChange(text) {
        setFirstNameText(text);
    }

    function handleLastNameChange(text) {
        setLastNameText(text);
    }

    function handleUserNameChange(text) {
        setUserNameText(text);
    }

    function handlePasswordChange(text) {
        setPasswordText(text);
    }

    function handlePhoneChange(text){
        setPhoneText(text);
    }

    const handleCreateAccount = async () => {
        try {
            const response = await fetch('https://cartful.azurewebsites.net/account/CreateAccount', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                firstName: firstNameText,
                lastName: lastNameText,
                userName: userNameText,
                password: passwordText,
                // this field isn't working so I am hard-coding the value
                phoneNumber: '11111111'
              })
            });
            const data = await response.json();
            const code = response.status;
            alert(`Response data: ${JSON.stringify(code)}`); // or display the data in some other way
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
                        onChangeText={handleFirstNameChange}
                        value={firstNameText}
                        placeholder= 'First Name'
                    />

                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handleLastNameChange}
                        value={lastNameText}
                        placeholder= 'Last Name'
                    />

                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handleUserNameChange}
                        value={userNameText}
                        placeholder= 'Username'
                    />  

                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handlePasswordChange}
                        value={passwordText}
                        placeholder= 'Password'
                        secureTextEntry={false}
                    />                    

                    <TextInput
                        style={styles.formComponent}
                        onChangeText={handlePhoneChange}
                        value={phoneText}
                        placeholder= 'Phone Number'
                    />      
                </View>

                <Text style={styles.TermsOfService}>By creating an account you agree to our Terms of Service and Privacy Policy</Text>
                <Pressable style={styles.button} onPress={handleCreateAccount}>
                    <Text style={styles.text}>CONTINUE</Text>
                </Pressable>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default Signup;