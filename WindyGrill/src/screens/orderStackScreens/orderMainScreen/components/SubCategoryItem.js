import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Button from '../../../../components/Button';

import { globalStyles } from '../../../../helper/globalStyles';
import { appColors } from '../../../../helper/colors';
import { appIcons } from '../../../../helper/icons';

const SubCategoryItem = (props) => {
    const {
        item = {}, // prop for item
        onSubCategoryItemPress = () => { }, // callback for clcik
        oneByRow = false, // prop for knowing if it is one by row or
        renderLine = false // prop for knowing if you need line or not
    } = props;
    {/** function for rendering bottom line */ }
    const _renderLine = () => {
        if (renderLine) {
            return (
                <View style={styles.line} />
            )
        }
    }
    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={oneByRow ? styles.containerLarge : styles.container}
                    onPress={() => { onSubCategoryItemPress() }}
                    activeOpacity={0.5}
                    oneByRow={false}
                >
                    <Image
                        style={oneByRow ? styles.imageLarge : styles.imageLarge}
                        source={appIcons.burgerImage}
                    />
                    <Text style={oneByRow ? styles.descriptionLarge : styles.description}>{item?.title ? item?.title : 'Title text'}</Text>
                    <Text style={oneByRow ? styles.priceTextLarge : styles.priceText}>{"400 RSD"}</Text>
                    <Text style={oneByRow ? styles.shortDescriptionLarge : styles.shortDescription}>{"Lorem ispum ksmdka madadada frfa"}</Text>
                    <Button
                        title={"Kupi"}
                        customContainerStyle={oneByRow ? styles.buttonContainerLarge : styles.buttonContainer}
                        customTitleStyle={{ padding: 0, color: appColors.white }}
                        onPress={() => { onSubCategoryItemPress() }}
                    />
                </TouchableOpacity>
                {_renderLine()}
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: (Dimensions.get('screen').width - 20) / 2,
        backgroundColor: appColors.white,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLarge: {
        width: (Dimensions.get('screen').width - 20) / 1.5,
        backgroundColor: appColors.white,
        marginHorizontal: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        fontSize: 25,
        color: appColors.black,
        textAlign: 'center',
        ...globalStyles.textFontBold
    },
    descriptionLarge: {
        fontSize: 30,
        color: appColors.black,
        textAlign: 'center',
        ...globalStyles.textFontBold
    },
    priceText: {
        fontSize: 17,
        color: appColors.red,
        ...globalStyles.textFontSemiBold
    },
    priceTextLarge: {
        fontSize: 22,
        color: appColors.red,
        ...globalStyles.textFontSemiBold
    },
    shortDescription: {
        fontSize: 17,
        color: appColors.textGray,
        textAlign: 'center',
        ...globalStyles.textFontRegular
    },
    shortDescriptionLarge: {
        fontSize: 22,
        color: appColors.textGray,
        textAlign: 'center',
        ...globalStyles.textFontRegular
    },
    imageSmall: {
        width: 100,
        height: 100
    },
    imageLarge: {
        width: 170,
        height: 170
    },
    buttonContainer: {
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: appColors.red,
        width: 100,
        height: 40,
        alignItems: 'center'
    },
    buttonContainerLarge: {
        marginTop: 10,
        justifyContent: 'center',
        backgroundColor: appColors.red,
        width: 200,
        height: 40,
        alignItems: 'center'
    },
    line: {
        width: Dimensions.get('screen').width / 1.05,
        height: 1,
        backgroundColor: appColors.textGray,
        alignSelf: 'center',
        marginTop: 15
    }
});

export default SubCategoryItem;