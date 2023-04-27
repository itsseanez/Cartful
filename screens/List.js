import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,ScrollView, TextInput, Button, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {
    styles
} from './../components/styles';

const List = ({navigation}) => {
    const route = useRoute();
    const listID= route.params.listID

    const [userItems, setUserItems] = useState([]);
    const [newItem, setNewItem] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch(`https://cartful.azurewebsites.net/item/GetItems?listID=${listID}`)
          .then(response => response.json())
          .then(data => setUserItems(data))
          .catch(error => console.error(error));

      }, []);

    if (!userItems) {
        return <Text>Loading...</Text>;
    }

    const handleDelete = async(itemID) => {
        await fetch(`https://cartful.azurewebsites.net/list/deleteItems?itemID=${itemID}`, {
            method: 'DELETE'
        });
        setCount(count + 1);
    };

    const handleItemChange= async() =>{
        try {
            const response = await fetch(`https://cartful.azurewebsites.net/item/CreateItems?listID=${listID}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                listID: listID,
                itemName: newItem,
                isChecked: true
              })
            });
            const data = await response.json();
            const code = response.status;
            setCount(count + 1);
            //alert(`Response data: ${JSON.stringify(code)}`);  or display the data in some other way
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View>
                    <View style={styles.row}>
                            <TextInput
                                style={styles.formComponent}
                                onChangeText={setNewItem}
                                value={newItem}
                                placeholder= 'New Item'
                            />
                            <Pressable onPress={() => handleItemChange()}>
                                <Text style={styles.pageTitle}>+</Text>
                            </Pressable>
                    </View>
                    <View>
                        {userItems.map((item) => (
                            <View style={styles.row}>
                                <Text key={item.itemID} style={styles.pageSubTitle}>{item.itemName}</Text>
                                <Pressable style={styles.delete} onPress={() => handleDelete(item.itemID)}>
                                    <Text style={styles.text}>X</Text>
                                </Pressable>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default List;