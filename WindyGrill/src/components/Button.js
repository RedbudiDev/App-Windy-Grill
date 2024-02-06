import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { appColors } from '../helper/colors';

const Button = (props) => {

    const {
        title = "", // prop for title of button
        onPress = () => { }, // callback for press on button
        customContainerStyle = {}, // prop for custom contaienr style
        customTitleStyle = {}, // prop for custom title text style
    } = props;
    return (
        <TouchableOpacity
            onPress={() => { onPress() }}
            style={[styles.container, customContainerStyle]}
            activeOpacity={0.7}
        >
            <Text style={[styles.text, customTitleStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: appColors.red,
        width: Dimensions.get('screen').width - 40,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 20,
        color: appColors.white,
        fontFamily: 'FlameRegular',
        fontSize: 18
    }
})

export default Button;