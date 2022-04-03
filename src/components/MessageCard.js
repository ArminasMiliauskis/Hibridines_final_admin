import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function MessageCard(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.titleText}>{props.fName} {props.lName}</Text>
            <Text style={styles.descriptionText}>About: {props.car}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222831',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        color: 'white',
        width: '100%',
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
    descriptionText: {
        fontSize: 18,
        color: 'grey'
    }

});

export default MessageCard;