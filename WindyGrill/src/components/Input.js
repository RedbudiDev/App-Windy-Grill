import React from 'react';
import { View, StyleSheet, TextInput, Dimensions } from 'react-native';
import { appColors } from '../helper/colors';


const Input = (props) => {
    const {
        value = "", // prop for value of input
        onChangeText = () => { }, // callback for text change
        customInputStyle = {}, // custom styles for input
        customContainerStyle = {}, // custom container style
        keyboardType = "default", // prop for determing style of input keyboard
        placeholder = "", // prop for placeholder
        multiline = false, // prop for multiline
    } = props;

    // main return
    return (
        <View style={[styles.container, customContainerStyle]}>
            <TextInput
                value={value}
                onChangeText={(txt) => { onChangeText(txt) }}
                multiline={multiline}
                style={[styles.input(multiline), customInputStyle]}
                keyboardType={keyboardType}
                placeholder={placeholder}
                autoCapitalize={'none'}
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    input: (multiline) => {
        return {
            height: multiline ? 180 : 55,
            width: Dimensions.get('screen').width - 40,
            borderWidth: 1,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
            fontFamily: "FlameRegular",
            color: appColors.black,
            textAlignVertical: multiline ? "top" : "center"

        }
    }
})

export default Input;