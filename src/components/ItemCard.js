import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import ButtonComponent from './ButtonComponent';

function ItemCard(props) {
    return (
        <View style={styles.container}>
            <Image
                    style={styles.image}
                    source={{
                        uri: props.image,
                    }}
                />

            <Text style={styles.titleText}>{props.brand}</Text>
            <Text style={styles.descriptionText}>{props.model} • {props.year}</Text>
            <View style={styles.buttonArea}>
                <ButtonComponent buttonName="EDIT" onPress={props.onPressEdit}/>
                <ButtonComponent buttonName="X" onPress={props.onPressDelete}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222831',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        width: '95%',
        height: 350,
        marginTop: 10,
        marginBottom: 10,
        borderRightColor: 'red',
        borderLeftColor: 'red',
        borderWidth: 5,
    },
    image: {
        marginTop: 15,
        height: 160,
        width: '80%',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: "white"
    },
    titleText: {
        fontSize: 24,
        color: 'white',
    },
    descriptionText: {
        fontSize: 18,
        color: 'grey'
    },
    buttonArea: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between'
    }
});

export default ItemCard;