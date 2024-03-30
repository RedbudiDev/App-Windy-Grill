import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';

import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { fetchData } from '../../../services/FetchClient';
import usePolyglot from '../../../hooks/usePolyglot';

import Button from '../../../components/Button';
import HeaderBackButton from '../../../components/HeaderBackButton';
import SectionTitle from '../../../components/SectionTitle';

import { appColors } from '../../../helper/colors';
import { appIcons } from '../../../helper/icons';
import { globalStyles } from '../../../helper/globalStyles';

import config from '../../../../app.json';
import { numberToCurrency } from '../../../helper/functions';

const ProductDetailScreen = (props) => {

    /** getting product from previous screen */
    const { params } = props.route;
    const { product } = params;

    // token redux state::
    const tokenReduxState = useSelector((state) => state.auth);
    const { token } = tokenReduxState;


    const navigation = useNavigation();
    const __ = usePolyglot();

    // state for single product
    const [singleProduct, setSingleProduct] = React.useState(null);

    let imageUrl = `${config?.baseUrl}/media/catalog/product${singleProduct?.custom_attributes[0]?.value}`;

    /**
     * function for fetching single product
     */
    async function _fetchSingleProduct(sku) {
        try {
            if (sku) {
                const url = `all/V1/products/${sku}`;
                const methode = "GET";
                const data = undefined;
                const response = await fetchData(url, methode, data, token);
                const singleProductData = response?.data;
                setSingleProduct(singleProductData);

            }
        } catch (error) {
            console.log("Error:", error);
        }
    }

    React.useEffect(() => { _fetchSingleProduct(product?.sku) }, [product]);

    // main return
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false} style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <HeaderBackButton
                    onLeftIconPress={() => { navigation.goBack() }}
                />
                {/** PRODUCT IMAGE */}
                <Image
                    resizeMode={'contain'}
                    source={{ uri: imageUrl }}
                    style={{ height: 220, width: 220, alignSelf: 'center', borderRadius: 20 }}
                />
                <SectionTitle
                    text={singleProduct?.name}
                    customContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                    customTextStyle = {{textAlign: 'center'}}
                />
                <Text style={styles.descriptionText}>{"Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum (pain itself)."}</Text>
                <Text style={styles.priceText}>{numberToCurrency(singleProduct?.price) + " RSD"}</Text>
                <View style={styles.line} />
                <Button
                    title={__("Dodaj u korpu").toUpperCase() + `     |    ${ numberToCurrency(singleProduct?.price) } RSD`}
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