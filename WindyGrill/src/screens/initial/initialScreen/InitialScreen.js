import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { appColors } from '../../../helper/colors';

const InitialScreen = () => {
    return (
        <View style= {styles.container}>
            <Text>InitialScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: appColors.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default InitialScreen;