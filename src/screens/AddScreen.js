import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TextInput } from 'react-native';
import { addCar } from '../database/carDatabase.utils';

import ButtonComponent from '../components/ButtonComponent';

function AddScreen({ navigation }) {
    const [brand, onChangeBrandText] = useState();
    const [model, onChangeModelText] = useState();
    const [year, onChangeYear] = useState();
    const [image, onChangeImage] = useState();

    const onPress = () => {
        addCar({
            brand: brand,
            model: model,
            year: year,
            image: image
        });

        onChangeBrandText(null);
        onChangeModelText(null);
        onChangeYear(null);
        onChangeImage(null);

        navigation.navigate('Browse');
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                translucent={false}
                backgroundColor="#222130"
            />
            <Text style={styles.text}>Add vehicle</Text>
            <TextInput
                style={styles.input}
                placeholder="Brand"
                placeholderTextColor='#878787'
                onChangeText={text => onChangeBrandText(text)}
                value={brand}
            />
            <TextInput
                style={styles.input}
                placeholder="Model"
                placeholderTextColor='#878787'
                onChangeText={text => onChangeModelText(text)}
                value={model}
            />
            <TextInput
                style={styles.input}
                placeholder="Year"
                placeholderTextColor='#878787'
                onChangeText={text => onChangeYear(text)}
                value={year}
            />
            <TextInput
                style={styles.input}
                placeholder="Image url"
                placeholderTextColor='#878787'
                onChangeText={text => onChangeImage(text)}
                value={image}
            />
            <ButtonComponent
                buttonName="CONFIRM"
                onPress={onPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222130',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        color: 'white',
        width: '80%',
        height: 40,
        borderRightColor: 'red',
        borderLeftColor: 'red',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
    },
    text: {
        color: 'white',
        fontSize: 24,
        margin: 10,
        textAlign: 'left',
    },
    textArea: {
        width: '80%',
        color: 'white',
        borderRightColor: 'red',
        borderLeftColor: 'red',
        borderWidth: 1,
        padding: 10,
        margin: 10,
        height: 150,
    }
});

export default AddScreen;