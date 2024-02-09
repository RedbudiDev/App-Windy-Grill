import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

import usePolyglot from "../../../hooks/usePolyglot";
import { useNavigation } from "@react-navigation/native";

import Header from "../../../components/Header";
import Button from "../../../components/Button";
import SectionTitle from "../../../components/SectionTitle";

import { appColors } from "../../../helper/colors";
import { appIcons } from "../../../helper/icons";

const ReorderLoginScreen = () => {
    const navigation = useNavigation();
    const __ = usePolyglot();

    const _renderRightIconSection = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                disabled={true}
                style={styles.containerRightSectionIcon}
            >
                <View>
                    <Image 
                        source={appIcons.reorder}
                        style={{width: 30, height: 30}}
                        tintColor={appColors.white}
                    />
                </View>
                <Text style = {styles.text}>{__("Ponovi").toUpperCase()}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header
                    showRightIcon
                    onRightIconPress={() => { navigation.navigate(screens.moreTab, { screen: screens.cartScreen }) }}
                />
                <SectionTitle 
                    text = {__("Narudžbine").toUpperCase()}
                    rightIcon={_renderRightIconSection}
                />
                <Text style = {styles.textContent}>{__("Ups. Niste ulogovani.")}</Text>
                <Button 
                    title = {__("Uloguj se")}
                    customContainerStyle = {{width: Dimensions.get('screen').width / 1.7, marginTop: 30}}
                    onPress = {() => {console.log("Press!")}}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.background
    },
    containerRightSectionIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: appColors.red,
        opacity: 0.5,
        padding: 10,
        borderRadius: 20,
        width: Dimensions.get('screen').width / 2.7
    },
    text: {
        fontSize: 17,
        color: appColors.white,
        fontFamily: 'FlameRegular'
    },
    textContent: {
        fontFamily: 'FlameRegular',
        color: appColors.black,
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 20
    }
})

export default ReorderLoginScreen;