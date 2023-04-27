import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';

import {
    styles
} from './../components/styles';
import Login from '../screens/Login';

const Home = () => {

    const [objectList, setObjectList] = useState([]);

    /*useEffect(() => {
        fetch(`https://cartful.azurewebsites.net/list/GetLists?userId=${}`)
        .then(response => response.json())
        .then(data => setObjectList(data))
        .catch(error => console.error(error));
    }, []);*/

    return (
        <FlatList
        data={objectList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
            <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            {/* Display other object details as needed */}
            </View>
        )}
        />
    );
}

export default Home;