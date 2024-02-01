import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../helper/colors';

const DevelopmentScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textDevelopment}>In development phase...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white
    },
    textDevelopment: {
        color: appColors.black,
        fontWeight: 'bold'
    }
})

export default DevelopmentScreen;