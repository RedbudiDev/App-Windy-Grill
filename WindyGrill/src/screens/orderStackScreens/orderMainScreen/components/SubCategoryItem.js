import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { appColors } from '../../../../helper/colors';

const SubCategoryItem = () => {
    return (
        <View style = {styles.container}>
            <Text>Alo</Text>
        </View>
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
        borderColor: appColors.textGray
    }
});

export default SubCategoryItem;