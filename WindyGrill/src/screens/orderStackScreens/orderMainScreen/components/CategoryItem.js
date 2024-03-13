import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { appColors } from '../../../../helper/colors';
import { appIcons } from '../../../../helper/icons';

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
            style={{ alignItems: 'center' }}
        >
            <Image
                style={index === selectedIndex ? { width: 140, height: 95 } : { width: 150, height: 80 }}
                source={appIcons.burgerImageOne}
                resizeMode={'contain'}
            />
            <Text style={[styles.titleStyle, index === selectedIndex ? { fontSize: 17 } : {}]}>{item?.title}</Text>
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
    containerSelected: {
        height: 90,
        marginHorizontal: 10,
        width: 120,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: appColors.white,
        backgroundColor: appColors.white,
        borderWidth: 1,
        borderColor: appColors.black
    },
    titleStyle: {
        fontFamily: 'FlameRegular',
        fontSize: 15,
        color: appColors.black,
        marginTop: 5
    }
});

export default CategoryItem;