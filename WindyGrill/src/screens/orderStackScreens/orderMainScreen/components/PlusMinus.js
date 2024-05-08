import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { appColors } from '../../../../helper/colors';
import { globalStyles } from '../../../../helper/globalStyles';

const PlusMinus = (props) => {
    const {
        number = -1, // initial number
        minusPress = () => { }, // callback for minus press
        plusPress = () => { }, // callback for plus press
        customContainerStyle = {} // prop for custom container style
    } = props;

    return (
        <View style={[styles.container, customContainerStyle]}>
            <TouchableOpacity
                style={styles.subContainer}
                activeOpacity={0.7}
                onPress={() => { minusPress(number - 1) }}
                disabled={number === 1}
            >
                <View style={styles.viewMinus} />
            </TouchableOpacity>
            <Text style = {styles.numberText}>{number}</Text>
            <TouchableOpacity
                style={styles.subContainer}
                activeOpacity={0.7}
                onPress={() => { plusPress(number + 1) }}
            >
                <Text style={styles.plusMinusText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: appColors.white,
        width: Dimensions.get('screen').width / 3,
        justifyContent: 'space-around',
    },
    subContainer: {
        width: (Dimensions.get('screen').width / 3) / 3,
        backgroundColor: appColors.baseColor,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusMinusText: {
        fontSize: 20,
        ...globalStyles.textFontBold
    },
    viewMinus: {
        width: 10,
        height: 2,
        backgroundColor: appColors.black
    },
    numberText: {
        fontSize: 17,
        ...globalStyles.textFontBold,
        color: appColors.black
    }
});

export default PlusMinus;