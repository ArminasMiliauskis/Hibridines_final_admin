import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList, Text } from 'react-native';

import MessageCard from '../components/MessageCard';
import { fetchMessageData } from '../database/messageDatabase.utils';

function MessagesScreen({ navigation }) {
    const [data, onChangeData] = useState([]);

    useEffect(() => {
        fetchMessageData().then((result) => {
            onChangeData(result);
        });
    }, [navigation, data]);

    const renderItem = ({ item }) => (
        <MessageCard
            fName={item.fName}
            lName={item.lName}
            car={item.car.brand}
            onPress={() => navigation.navigate('Message Details', {
                message: item
            })}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Messages</Text>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <StatusBar
                barStyle="light-content"
                translucent={false}
                backgroundColor="#222130"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
        justifyContent: 'flex-start',
    },
    titleText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
    },
});

export default MessagesScreen;