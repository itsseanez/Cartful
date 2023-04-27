import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
    styles
} from './../components/styles';
import Login from '../screens/Login';

const Home = ({navigation}) => {

    const route = useRoute();
    const userId= route.params.userId
    //const allLists= await fetch(`https://cartful.azurewebsites.net/list/GetLists?userId=${userId}`)

    const [userLists, setUserLists] = useState(null);
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
        <View>
            {userLists.map((list) => (
                <Pressable style={styles.button} key={list.listID} onPress={() => navigation.navigate('List', list.listID)}>
                    <Text style={styles.text}>{list.title}</Text>
                </Pressable>
            ))}
        </View>
    );
}

export default Home;