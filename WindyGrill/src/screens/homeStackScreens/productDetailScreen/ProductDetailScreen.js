import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import usePolyglot from '../../../hooks/usePolyglot';
import Button from '../../../components/Button';
import HeaderBackButton from '../../../components/HeaderBackButton';
import SectionTitle from '../../../components/SectionTitle';
import { appColors } from '../../../helper/colors';

const ProductDetailScreen = () => {
    const navigation = useNavigation();
    const __ = usePolyglot();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} contentContainerStyle = {{paddingBottom: 20}} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <HeaderBackButton
                    onLeftIconPress={() => { navigation.goBack() }}
                />
                <View style={{ height: 180, backgroundColor: appColors.appColor }}>
                    <View style={{ height: 130, width: Dimensions.get('screen').width / 1.7, backgroundColor: 'red', alignSelf: 'center', position: 'absolute', bottom: -40 }}>
                    </View>
                </View>
                <View style={{ marginTop: 50 }} />
                <SectionTitle
                    text={"BURGER KING"}
                />
                <Text style={styles.descriptionText}>{"Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (pain itself)."}</Text>
                <Text style={styles.priceText}>{"6,99$"}</Text>
                <View style={{ height: 1, width: Dimensions.get("screen").width / 1.4, backgroundColor: appColors.black, alignSelf: 'center', marginTop: 40 }} />
                <Button
                    title={__("Dodaj u korpu").toUpperCase() + '       | 6,99$'}
                    customContainerStyle={{ marginTop: 40 }}
                    onPress={() => { console.log("Add to cart press!") }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    priceText: {
        color: 'green',
        fontFamily: 'FlameRegular',
        marginLeft: 10,
        fontSize: 17,
        marginTop: 40
    },
    descriptionText: {
        fontFamily: 'FlameRegular',
        fontSize: 17,
        color: appColors.textGray,
        marginLeft: 10,
        marginTop: 20
    }
})

export default ProductDetailScreen;