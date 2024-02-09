import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';

import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';
import ProductItem from '../../homeStackScreens/mainHomeScreen/components/ProductItem';

import { screens } from '../../../helper/strings';
import { appColors } from '../../../helper/colors';

const OffersMainScreen = () => {
    const navigation = useNavigation();
    const __ = usePolyglot();

    // function for rendering products
    const _renderProducts = () => {
        return (
            [1, 2, 3, 4, 5, 6].map((item, i) => {
                return (
                    <View key={i.toString()}>
                        <ProductItem
                            onItemPress={() => { navigation.navigate(screens.productDetailOffersTabScreen) }}
                            type='two'
                        />
                    </View>
                )
            })
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header
                    showRightIcon
                    onRightIconPress={() => { navigation.navigate(screens.moreTab, { screen: screens.cartScreen }) }}
                />
                <SectionTitle
                    customContainerStyle={{ backgroundColor: appColors.appColor, height: 60 }}
                    text={__("Ponude").toUpperCase()}
                />
                {_renderProducts()}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default OffersMainScreen;