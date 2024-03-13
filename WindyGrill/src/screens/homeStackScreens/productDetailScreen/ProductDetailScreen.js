import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import usePolyglot from '../../../hooks/usePolyglot';
import { useNavigation } from '@react-navigation/native';

import Button from '../../../components/Button';
import HeaderBackButton from '../../../components/HeaderBackButton';
import SectionTitle from '../../../components/SectionTitle';

import { appColors } from '../../../helper/colors';
import { appIcons } from '../../../helper/icons';
import { globalStyles } from '../../../helper/globalStyles';

const ProductDetailScreen = () => {
    const navigation = useNavigation();
    const __ = usePolyglot();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <HeaderBackButton
                    onLeftIconPress={() => { navigation.goBack() }}
                />
                {/** PRODUCT IMAGE */}
                <Image
                    resizeMode={'stretch'}
                    source={appIcons.burgerImageOne}
                    style={{ height: 220, width: 220, alignSelf: 'center', borderRadius: 20 }}
                />
                <SectionTitle
                    text={"BURGER KING"}
                    customContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                />
                <Text style={styles.descriptionText}>{"Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (pain itself)."}</Text>
                <Text style={styles.priceText}>{"450 RSD"}</Text>
                <View style={styles.line} />
                <Button
                    title={__("Dodaj u korpu").toUpperCase() + '     |    450 RSD'}
                    customContainerStyle={{ marginTop: 20 }}
                    onPress={() => { console.log("Add to cart press!") }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.baseColor
    },
    priceText: {
        color: appColors.white,
        marginLeft: 10,
        fontSize: 30,
        marginTop: 20,
        alignSelf: 'center',
        ...globalStyles.textFontSemiBold
    },
    descriptionText: {
        fontSize: 17,
        color: appColors.black,
        marginHorizontal: 10,
        marginTop: 20,
        textAlign: 'justify',
        ...globalStyles.textFontRegular
    },
    line: {
        height: 1,
        width: Dimensions.get("screen").width / 1.4,
        backgroundColor: appColors.black,
        alignSelf: 'center',
        marginTop: 20
    }
})

export default ProductDetailScreen;