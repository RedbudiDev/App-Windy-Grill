import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import usePolyglot from "../../../hooks/usePolyglot";

import Header from "../../../components/Header";
import Button from "../../../components/Button";
import SectionTitle from "../../../components/SectionTitle";
import BannerSlider from "./components/BannerSlider";
import SubCategoryItem from "../../orderStackScreens/orderMainScreen/components/SubCategoryItem";

import { globalStyles } from "../../../helper/globalStyles";
import { screens } from "../../../helper/strings";
import { appColors } from "../../../helper/colors";

import images from './mock/images.json';

const MainHomeScreen = () => {
    const navigation = useNavigation();
    const __ = usePolyglot();


    // function for rendering right button on section title
    const _renderSectionRightIcon = () => {
        return (
            <TouchableOpacity
                onPress={() => { navigation.navigate(screens.offersTab, { screens: screens.offersMainScreen }) }}
                activeOpacity={0.7}
            >
                <Text style={styles.sectionRightTextStyle}>{__("Pogledaj sve")}</Text>
            </TouchableOpacity>
        )
    }

    // function for rendering some of products
    const _renderProducts = () => {
        return (
            [1, 2, 3, 4, 5, 6].map((item, i) => {
                return (
                    <View key={i.toString()}>
                        <SubCategoryItem
                            item={item}
                            onSubCategoryItemPress={() => { navigation.navigate(screens.productDetailHomeTabScreen) }}
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
                <BannerSlider
                    data={images}
                />
                <Button
                    title={__("Započnite narudžbinu").toUpperCase()}
                    customContainerStyle={{ width: Dimensions.get('screen').width / 1.8 }}
                    onPress={() => { console.log("Click") }}
                />
                <SectionTitle
                    text={__("Ponude").toUpperCase()}
                    rightIcon={_renderSectionRightIcon}
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
    },
    sectionRightTextStyle: {
        fontSize: 18,
        color: appColors.red,
        ...globalStyles.textFontSemiBold
    },
    productItemnContainer: {
        flexDirection: 'row',
        height: 200,
        backgroundColor: appColors.white
    }
});

export default MainHomeScreen;