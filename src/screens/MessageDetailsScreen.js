import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react-native';

function MessageDetailsScreen({ route }) {

    const { message } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Message Details</Text>
            <View style={styles.messageContainer}>
                <Text style={styles.messageText}>From: {message.fName} {message.lName}</Text>
                <Text style={styles.messageText}>Email: {message.email}</Text>
                <Text style={styles.messageText}>Phone: {message.phone}</Text>
                <Text style={styles.messageText}>Other: {message.other}</Text>
                <Text style={styles.messageText}>About: {message.car.brand} ({message.car.id})</Text>
            </View>
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
        alignItems: 'center'
    },
    messageContainer: {
        backgroundColor: '#222831',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        color: 'white',
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderRightColor: 'red',
        borderLeftColor: 'red',
        borderWidth: 5,
    },
    titleText: {
        fontSize: 24,
        color: 'white',
    },
    messageText: {
        fontSize: 14,
        color: 'white',
    }
});

export default MessageDetailsScreen;