import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import usePolyglot from '../../../hooks/usePolyglot';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/Header';

import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

import categories from './mock/categories.json';
import CategoryItem from './components/CategoryItem';
import SubCategoryItem from './components/SubCategoryItem';

const OrderMainScreen = () => {

    const navigation = useNavigation();
    const __ = usePolyglot();

    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    const _renderCategories = () => {
        return (
            categories?.map((item, i) => {
                return (
                    <View key={i.toString()}>
                        <CategoryItem
                            item={item}
                            onCategoryItemPress={() => { setSelectedCategory(item) }}
                        />
                    </View>
                )
            })
        )
    }

    const _renderSubCategories = () => {
        return (
            selectedCategory?.sub_categories?.map((item, i) => {
                return (
                    <SubCategoryItem 
                        
                    />
                )
            })
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header
                    showRightIcon
                    onRightIconPress={() => { navigation.navigate(screens.moreTab, { screen: screens.cartScreen }) }}
                />

                <View style={{ height: 100, backgroundColor: appColors.red }}>
                    <Text style={styles.textTitle}>{__("Naš meni").toUpperCase()}</Text>
                    <View style={styles.scrollViewStyle}>
                        <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }} horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                            {_renderCategories()}
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginTop: 60, backgroundColor: 'blue', height: 100}}/>
                {_renderSubCategories()}
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.background
    },
    textTitle: {
        fontFamily: 'FlameBold',
        fontSize: 25,
        color: appColors.white,
        alignSelf: 'center',
        marginTop: 20
    },
    scrollViewStyle: {
        position: 'absolute',
        height: 120,
        width: '100%',
        bottom: -80,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default OrderMainScreen;