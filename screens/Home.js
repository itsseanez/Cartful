import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text,ScrollView, View, SafeAreaView, TextInput, Button, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
    styles
} from './../components/styles';
import Login from '../screens/Login';

const Home = ({navigation}) => {

    const route = useRoute();
    const userId= route.params.userId

    const [userLists, setUserLists] = useState(null);
    const [newList, setNewList] = useState(null);

    const handleReset = () => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login'}],
        });
      };

    const handleDelete = async(listId) => {
        await fetch(`https://cartful.azurewebsites.net/list/deleteList?listId=${listId}`, {
            method: 'DELETE'
        });
        navigation.reset({
            routes: [{ name: 'Home', params: { userId: userId } }],
        });
    };

    const handleListChange= async() =>{
        try {
            const response = await fetch('https://cartful.azurewebsites.net/list/CreateList', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                title: newList,
                userID: userId,
                items: []
              })
            });
            const data = await response.json();
            const code = response.status;
            navigation.reset({
                routes: [{ name: 'Home', params: { userId: userId } }],
            });
            //alert(`Response data: ${JSON.stringify(code)}`);  or display the data in some other way
          } catch (error) {
            console.error(error);
          }
    };

    useEffect(() => {
        fetch(`https://cartful.azurewebsites.net/list/GetLists?userId=${userId}`)
          .then(response => response.json())
          .then(data => setUserLists(data))
          .catch(error => console.error(error));
      }, []);

    if (!userLists) {
        return <Text>Loading...</Text>;
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <Text style={styles.pageTitle}>Cartful</Text>
                <View style={styles.row}>
                    <TextInput
                        style={styles.formComponent}
                        onChangeText={setNewList}
                        value={newList}
                        placeholder= 'New List'
                    />
                    <Pressable onPress={() => handleListChange()}>
                        <Text style={styles.pageTitle}>+</Text>
                    </Pressable>
                </View>
                {userLists.map((list) => (
                    <View style={styles.row}>
                        <Pressable style={styles.button} key={list.listID} onPress={() => navigation.navigate('List', {listID: list.listID})}>
                            <Text style={styles.text}>{list.title}</Text>
                        </Pressable>
                        <Pressable style={styles.delete} onPress={() => handleDelete(list.listID)}>
                            <Text style={styles.text}>X</Text>
                        </Pressable>
                    </View>
                ))}
                <Pressable onPress={() => handleReset()}>
                    <Text style={styles.pageSubTitle}>Log out</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;