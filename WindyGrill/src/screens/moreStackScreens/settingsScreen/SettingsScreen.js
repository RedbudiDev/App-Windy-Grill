import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderBackButton from '../../../components/HeaderBackButton';
import SectionTitle from '../../../components/SectionTitle';

const SettingsScreen = () => {

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
                    text={"SETTINGS"}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default SettingsScreen;