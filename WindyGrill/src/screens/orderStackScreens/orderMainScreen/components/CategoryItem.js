import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { appColors } from '../../../../helper/colors';
import { appIcons } from '../../../../helper/icons';

const CategoryItem = (props) => {

    const {
        onCategoryItemPress = () => { }, //callback for press on cateogry item
        item = {}, // item of category
    } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { onCategoryItemPress() }}
            style={styles.container}
        >
            <Image
                style={{ width: 120, height: 45 }}
                source={appIcons.burgerImage}
                resizeMode={'contain'}
            />
            <Text style={styles.titleStyle}>{item?.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        marginHorizontal: 10,
        width: 120,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: appColors.white,
        backgroundColor: appColors.white
    },
    titleStyle: {
        fontFamily: 'FlameRegular',
        fontSize: 13,
        color: appColors.black,
        marginTop: 10
    }
});

export default CategoryItem;