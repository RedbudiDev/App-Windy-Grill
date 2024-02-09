import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';
import { appColors } from '../../../../helper/colors';
import { appIcons } from '../../../../helper/icons';

const ProductItem = (props) => {

    const {
        item = {}, // prop for item
        onItemPress = () => {}, // callback for click on item
        type = '', // prop type of item
    } = props;
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style = {{...styles.container, backgroundColor: type === 'one' ? appColors.white : appColors.textGray}}
            onPress={() => {onItemPress()}}
        >
            <View style = {{...styles.imageContainer, backgroundColor: type === 'one' ? appColors.appColor : appColors.white }}>
                <Image 
                    source={appIcons.burgerImage}
                    style={styles.image}
                />
            </View>
            <View style = {styles.textContainer}>
                <Text style = {{...styles.text, color: type === 'one' ? appColors.textGray : appColors.black}}>{"BURGER KING EXTRA LARGE TRIPLE"}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
        backgroundColor: appColors.white,
        marginVertical: 5,
        paddingHorizontal: 20,
        width: Dimensions.get('screen').width
    },
    imageContainer: {
        borderRadius: 10,
        backgroundColor: appColors.appColor, 
        height: 100, 
        width: Dimensions.get('screen').width / 2.8,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    image: {
        width: Dimensions.get('screen').width / 3, 
        height: 80,
        backgroundColor: appColors.appColor,
        borderRadius: 10
    },
    text: {
        fontFamily: 'FlameRegular',
        color: appColors.textGray,
        fontSize: 20
    },
    textContainer: {
        height: 100, 
        marginLeft: 5, 
        marginTop: 5, 
        width: Dimensions.get('screen').width - (Dimensions.get('screen').width / 2.8) - 30
    }
})

export default ProductItem;