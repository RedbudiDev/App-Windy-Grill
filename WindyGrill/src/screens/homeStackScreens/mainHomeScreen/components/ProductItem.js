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
            style = {{...styles.container, backgroundColor: type === 'one' ? appColors.white : appColors.white}}
            onPress={() => {onItemPress()}}
        >
            <View style = {{...styles.imageContainer, backgroundColor: appColors.baseColorDarker }}>
                <Image 
                    source={appIcons.burgerImage}
                    style={styles.image}
                    resizeMode={'contain'}
                />
            </View>
            <View style = {styles.textContainer}>
                <Text style = {{...styles.text, color: type === 'one' ? appColors.textGray : appColors.textGray}}>{"BURGER KING EXTRA LARGE TRIPLE"}</Text>
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
        backgroundColor: appColors.baseColorDarker, 
        height: 100, 
        width: Dimensions.get('screen').width / 2.8,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    image: {
        width: '90%', 
        height: '85%',
        backgroundColor: appColors.white,
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