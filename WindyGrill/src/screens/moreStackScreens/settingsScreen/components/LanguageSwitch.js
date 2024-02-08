import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateLanguage, updateLanguageValue } from '../../../../redux/actions/LanguageActions';

import usePolyglot from '../../../../hooks/usePolyglot';
import { appColors } from '../../../../helper/colors';

const LanguageSwitch = () => {

    const lan = useSelector((state) => state.language.lan);

    const dispatch = useDispatch();
    const __ = usePolyglot();

    let isEnglish = lan === "en";

    /** funnction for changing language */
    function _handleChange(lan) {
        try {
            if(Platform.OS === "ios") {
                dispatch(updateLanguage(lan));
            } else {
                console.log("This must be changed!");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{__("Izaberite jezik / Choose language")}</Text>
            <View style={styles.subContainer}>
                <TouchableOpacity
                    onPress={() => { _handleChange("en") }}
                    style={isEnglish ? styles.containerSelectionSelected : styles.containerSelection}
                    activeOpacity={0.7}
                >
                    <Text style={isEnglish ? styles.textSelectionSelected : styles.textSelection}>{__("Engleski / Enlgish")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { _handleChange("srb") }}
                    style={isEnglish ? styles.containerSelection : styles.containerSelectionSelected}
                    activeOpacity={0.7}
                >
                    <Text style={isEnglish ? styles.textSelection : styles.textSelectionSelected}>{__("Srpski / Serbian")}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    textStyle: {
        fontSize: 18,
        color: appColors.textGray,
        fontFamily: 'FlameRegular',
        marginTop: 10
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    containerSelection: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 15,
        borderColor: appColors.textGray,
        backgroundColor: appColors.white
    },
    containerSelectionSelected: {
        borderWidth: 1,
        padding: 20,
        borderRadius: 15,
        borderColor: appColors.textGray,
        backgroundColor: appColors.red
    },
    textSelection: {
        fontSize: 15,
        color: appColors.textGray,
        fontFamily: 'FlameRegular'
    },
    textSelectionSelected: {
        fontSize: 15,
        color: appColors.white,
        fontFamily: 'FlameRegular'

    }
})

export default LanguageSwitch;