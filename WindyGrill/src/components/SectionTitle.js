import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appColors } from '../helper/colors';
import { globalStyles } from '../helper/globalStyles';

const SectionTitle = (props) => {
    const {
        text = "", // prop for text 
        customContainerStyle = {}, // prop for custom container style 
        customTextStyle = {}, // prop for custom text style
        rightIcon = () => {}, // prop for determing right icon
    } = props;

    // main return
    return (
        <View style={[styles.container, customContainerStyle]}>
            <Text style={[styles.text, customTextStyle]}>{text}</Text>
            {rightIcon()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 34,
        color: appColors.white,
        ...globalStyles.textFontExtraBold
    }
})

export default SectionTitle;