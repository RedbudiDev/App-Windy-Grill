import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
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
            style={ index === selectedIndex ? styles.containerSelected : styles.container}
        >
            <View style = {styles.imageContainer}>
            <Image
                style={{ width: 100, height: 45 }}
                source={appIcons.burgerImageOne}
                resizeMode={'contain'}
            />
            </View>
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
        fontSize: 12,
        color: appColors.black,
        marginTop: 5
    },
    imageContainer: {
        backgroundColor: appColors.baseColorDarker,
        borderRadius: 10,
        height: '70%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoryItem;