import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import usePolyglot from "../../../hooks/usePolyglot";

import Header from "../../../components/Header";
import Button from "../../../components/Button";
import ProductItem from "./components/ProductItem";
import SectionTitle from "../../../components/SectionTitle";

import { screens } from "../../../helper/strings";
import { appColors } from "../../../helper/colors";


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
            [1, 2, 3].map((item, i) => {
                return (
                    <View key={i.toString()}>
                        <ProductItem
                            onItemPress={() => { navigation.navigate(screens.productDetailHomeTabScreen) }}
                            type = 'one'
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
                <Button
                    title={__("Započnite narudžbinu").toUpperCase()}
                    customContainerStyle={{ width: Dimensions.get('screen').width / 1.8 }}
                    onPress={() => { console.log("Click") }}
                />
                <SectionTitle
                    text={__("Ponude").toUpperCase()}
                    rightIcon={_renderSectionRightIcon}
                />
                {_renderProducts()}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionRightTextStyle: {
        fontFamily: 'FlameRegular',
        fontSize: 18,
        color: 'orange'
    },
    productItemnContainer: {
        flexDirection: 'row',
        height: 200,
        backgroundColor: appColors.white
    }
});

export default MainHomeScreen;