import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';

import HeaderBackButton from '../../../components/HeaderBackButton';
import SectionTitle from '../../../components/SectionTitle';
import LanguageSwitch from './components/LanguageSwitch';
import { appColors } from '../../../helper/colors';

const SettingsScreen = () => {

    const __ = usePolyglot();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {/** header */}
                <HeaderBackButton
                    onLeftIconPress={() => { navigation.goBack() }}
                />
                {/** title */}
                <SectionTitle
                    text={__("Podešavanja")}
                />
                <View style = {styles.mainContentContainer}>
                    <LanguageSwitch />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.baseColor
    },
    mainContentContainer: {
        backgroundColor: appColors.white,
        paddingBottom: 25,
        borderRadius: 5,
        shadowColor: appColors.black,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5,
        marginHorizontal: 10,
    }
})

export default SettingsScreen;