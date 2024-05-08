import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import usePolyglot from '../../../../hooks/usePolyglot';
import { useSelector } from 'react-redux';
import { fetchData } from '../../../../services/FetchClient';

import Modal from "react-native-modal";
import PlusMinus from './PlusMinus';
import Button from '../../../../components/Button';

import { numberToCurrency } from '../../../../helper/functions';
import { globalStyles } from '../../../../helper/globalStyles';
import { appColors } from '../../../../helper/colors';
import { appIcons } from '../../../../helper/icons';

const CartModal = (props) => {
    const {
        isVisible = false, // prop for modal visibility
        onBackDropPress = () => { }, // callback for backdrop press
        selectedCartItem = {}, // prop for selected cart item 
        addToCart = () => { }, // callback for add to cart press
    } = props;

    // token redux state::
    const tokenReduxState = useSelector((state) => state.auth);
    const { token } = tokenReduxState;
    // state for count
    const [quantity, setQuantity] = React.useState(1);
    const __ = usePolyglot();

    const [loading, setLoading] = React.useState(false);

    /** function for handling add to cart */
    async function _handleAddToCart() {
        try {
            const product_sku = selectedCartItem?.item?.sku;
            const cartItem = {
                qty: quantity,
                sku: product_sku
            };
            const methode = "POST";
            const url = `V1/carts/mine/items`;
            const dataForServer = { cartItem: cartItem };
            const response = await fetchData(url, methode, dataForServer, token);
            setLoading(false);
            
        } catch (error) {
            console.log("Er:", error);
            console.log("Error:", error?.message?.response);
            setLoading(false);
        }
    }

    // main return
    return (
        <Modal
            isVisible={isVisible}
            style={{ justifyContent: 'flex-end' }}
            onBackdropPress={() => { onBackDropPress() }}
        >
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { onBackDropPress() }}
                    style={{ alignSelf: 'flex-end', marginRight: 20 }}
                >
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={appIcons.close}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.image}
                    source={{ uri: selectedCartItem?.image }}
                    resizeMode={'contain'}
                />
                <View style={{ marginHorizontal: 20, marginVertical: 10, alignItems: 'center', alignItems: 'center' }}>
                    <Text style={styles.titleText}>{selectedCartItem?.item?.name}</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
                        <PlusMinus
                            number={quantity}
                            minusPress={(number) => { setQuantity(number) }}
                            plusPress={(number) => { setQuantity(number) }}
                        />
                        <Text style={{ ...styles.titleText, marginLeft: 10, color: 'green' }}>{numberToCurrency(quantity * Number(selectedCartItem?.item?.price)) + " RSD"}</Text>
                    </View>
                </View>
                <Button
                    title={__("Dodaj u korpu")}
                    customContainerStyle={{ width: Dimensions.get('screen').width / 2, height: 38, marginTop: 0, alignSelf: 'flex-end', marginHorizontal: 10, borderRadius: 4 }}
                    customTitleStyle={{ padding: 0, color: appColors.white }}
                    onPress={() => { 
                        setLoading(true);
                        _handleAddToCart() 
                    }}
                    loading = {loading}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: 'auto',
        alignSelf: 'center',
        top: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: appColors.white,
        paddingTop: 20,
        paddingBottom: 40,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    titleText: {
        ...globalStyles.textFontBold,
        color: appColors.black,
        fontSize: 16,
        textAlign: 'center'
    }
})
export default CartModal;
