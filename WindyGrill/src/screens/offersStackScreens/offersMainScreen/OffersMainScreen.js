import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';

import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';
import ProductItem from '../../homeStackScreens/mainHomeScreen/components/ProductItem';
import SubCategoryItem from '../../orderStackScreens/orderMainScreen/components/SubCategoryItem';

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
                        <SubCategoryItem
                            item={item}
                            onSubCategoryItemPress={() => { alert('Not real item from api call!s') }}
                            oneByRow={true}
                            renderLine={true}
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
                    customContainerStyle={{ backgroundColor: appColors.baseColor, height: 40 }}
                    customTextStyle={{ color: appColors.white, fontSize: 34 }}
                    text={__("Ponude").toUpperCase()}
                />
                <View style={{ backgroundColor: appColors.white, alignItems: 'center' }}>
                    {_renderProducts()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.baseColor
    }
})

export default OffersMainScreen;