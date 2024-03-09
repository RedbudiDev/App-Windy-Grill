import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import usePolyglot from '../../../hooks/usePolyglot';
import { useDispatch } from 'react-redux';

import { updateToken } from '../../../redux/actions/AuthActions';

import SectionTitle from '../../../components/SectionTitle';
import PageItem from './components/PageItem';
import Header from '../../../components/Header';

import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

import pages from './mock/pages.json';

const MainMoreScreen = () => {

    // navigation
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const __ = usePolyglot();

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
                                switch (action) {
                                    case 'feedback':
                                        navigation.navigate(screens.feedbackScreen);
                                        break;
                                    case 'register':
                                        navigation.navigate(screens.registerScreen);
                                        break;
                                    case 'login':
                                        navigation.navigate(screens.loginScreen);
                                        break;
                                    case 'settings':
                                        navigation.navigate(screens.settingsScreen); 
                                        break;
                                    case 'career':
                                        console.log("A");
                                        break;
                                    case 'logout': 
                                        dispatch(updateToken(null));
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
                    text={__("Nalog").toUpperCase()}
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