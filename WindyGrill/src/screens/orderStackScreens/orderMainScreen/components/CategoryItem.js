import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

import { globalStyles } from '../../../../helper/globalStyles';
import { appColors } from '../../../../helper/colors';
import { appIcons } from '../../../../helper/icons';

export const ITEM_WIDTH = Dimensions.get('screen').width / 2.7;

const CategoryItem = (props) => {
    const {
        onCategoryItemPress = () => { }, //callback for press on cateogry item
        item = {}, // item of category
        selectedIndex = -1, // index selected category
        index = -1 // index of element
    } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { onCategoryItemPress() }}
            style={{ alignItems: 'center', width: ITEM_WIDTH, height: 150}}
        >
            <Image
                style={index === selectedIndex ? { width: 140, height: 100 } : { width: 150, height: 80 }}
                source={appIcons.burgerImageOne}
                resizeMode={'contain'}
            />
            <Text style={[styles.titleStyle, index === selectedIndex ? { fontSize: 17, color: appColors.red,  ...globalStyles.textFontExtraBold } : {}]}>{item?.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        marginHorizontal: 10,
        width: 120,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: appColors.white,
        backgroundColor: appColors.white
    },
    titleStyle: {
        fontSize: 15,
        color: appColors.black,
        marginTop: 4,
        textAlign: 'center',
        ...globalStyles.textFontSemiBold
    }
});

export default CategoryItem;