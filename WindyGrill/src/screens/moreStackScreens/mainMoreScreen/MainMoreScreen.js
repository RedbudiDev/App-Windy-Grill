import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SectionTitle from '../../../components/SectionTitle';
import PageItem from './components/PageItem';
import Header from '../../../components/Header';

import { appColors } from '../../../helper/colors';
import pages from './mock/pages.json';
import { screens } from '../../../helper/strings';

const MainMoreScreen = () => {

    // navigation
    const navigation = useNavigation();

    // function for mapping sections
    const _renderSections = () => {
        return (
            pages?.map((section, index) => {
                const { id, title, action } = section;
                return (
                    <View key={id.toString()}>
                        <PageItem
                            item={section}
                            onPagePress={() => { 
                                switch(action) {
                                    case 'feedback':
                                        navigation.navigate(screens.feedbackScreen);
                                        break;
                                    case 'login':
                                    case 'register':
                                    case 'career':
                                        console.log("A");
                                        break;
                                    default: 
                                        console.log("B");
                                        break;
                                }
                            }}
                        />
                    </View>
                )
            })
        )
    }

    // main return:
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header
                    showRightIcon
                    onRightIconPress={() => { navigation.navigate(screens.cartScreen) }}
                />

                {/** SECTION TITLE: */}
                <SectionTitle
                    text={"ACCOUNT"}
                />
                {/** page list sections: */}
                <View style={styles.mainContentContainer}>
                    {_renderSections()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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

export default MainMoreScreen;