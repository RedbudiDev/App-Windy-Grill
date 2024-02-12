import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { appColors } from '../../../../helper/colors';
import { appIcons } from '../../../../helper/icons';

const SubCategoryItem = (props) => {
    const {
        item = {}, // prop for item
        onSubCategoryItemPress = () => { } // callback for clcik
    } = props;
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { onSubCategoryItemPress() }}
            activeOpacity={0.5}
        >
            <Image
                style={{ width: 100, height: 100 }}
                source={appIcons.burgerImage}
            />
            <Text style={styles.description}>{item?.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('screen').width - 20) / 2,
        height: 200,
        backgroundColor: appColors.white,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: appColors.textGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        fontFamily: 'FlameBold',
        fontSize: 25,
        color: appColors.black,
        textAlign: 'center'
    }
});

export default SubCategoryItem;