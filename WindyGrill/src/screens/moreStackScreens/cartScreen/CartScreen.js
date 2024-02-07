import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';

import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';

import { screens } from '../../../helper/strings';

const CartScreen = () => {

    const navigation = useNavigation();
    const __ = usePolyglot();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header
                    showLeftIcon
                    onLeftIconPress={() => { navigation.goBack() }}
                />

                {/** SECTION TITLE: */}
                <SectionTitle
                    text={__("Korpa")}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default CartScreen;