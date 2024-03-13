import React from 'react';
import { Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Button from '../../../../components/Button';
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
            <Text style={{ fontSize: 17, color: appColors.red, fontFamily: 'FlameBold' }}>{"400 RSD"}</Text>
            <Text style={styles.shortDescription}>{"Lorem ispum ksmdka madadada frfa"}</Text>
            <Button
                title={"Kupi"}
                customContainerStyle={{ marginTop: 10, justifyContent: 'center', backgroundColor: appColors.red, width: 100, height: 40, alignItems: 'center' }}
                customTitleStyle={{ padding: 0 }}
                onPress={() => { onSubCategoryItemPress() }}
            />
        </TouchableOpacity>
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
    description: {
        fontFamily: 'FlameBold',
        fontSize: 25,
        color: appColors.black,
        textAlign: 'center'
    },
    shortDescription: {
        fontFamily: 'FlameRegular',
        fontSize: 17,
        color: appColors.textGray,
        textAlign: 'center'
    }
});

export default SubCategoryItem;