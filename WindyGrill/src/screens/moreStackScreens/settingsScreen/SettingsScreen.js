import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
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
    },
    mainContentContainer: {
        backgroundColor: appColors.white,
        paddingBottom: 25,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 5
    }
})

export default SettingsScreen;