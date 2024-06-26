import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { appColors } from '../helper/colors';
import { globalStyles } from '../helper/globalStyles';
import Loading from './Loading';

const Button = (props) => {

    const {
        title = "", // prop for title of button
        onPress = () => { }, // callback for press on button
        customContainerStyle = {}, // prop for custom contaienr style
        customTitleStyle = {}, // prop for custom title text style
        disabled = false, // prop for disabling button
        loading = false, // prop for loading button
    } = props;

    // main reutnr
    return (
        <TouchableOpacity
            onPress={() => { onPress() }}
            style={[styles.container, customContainerStyle]}
            activeOpacity={0.7}
            disabled={disabled || loading}
        >
            {
                loading ?
                    <Loading /> :
                    <Text style={[styles.text, customTitleStyle]}>{title}</Text>
            }
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
        color: appColors.backgroundDarker,
        fontSize: 18,
        ...globalStyles.textFontBold,
        color: appColors.white
    }
})

export default Button;