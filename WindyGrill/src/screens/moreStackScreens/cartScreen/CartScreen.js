import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Header from '../../../components/Header';
import SectionTitle from '../../../components/SectionTitle';

const CartScreen = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                {/** TODO: HEADER */}
                <Header
                    showLeftIcon
                    onLeftIconPress={() => { navigation.goBack() }}
                />

                {/** SECTION TITLE: */}
                <SectionTitle
                    text={"CART"}
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