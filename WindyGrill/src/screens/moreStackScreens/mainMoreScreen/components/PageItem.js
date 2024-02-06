import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import { appColors } from '../../../../helper/colors';
import { appIcons } from '../../../../helper/icons';

const PageItem = (props) => {

    const {
        item, // prop for item
        onPagePress = () => {} // callback for page press
    } = props;
    
    // main return
    return (
        <>
            <TouchableOpacity 
                style = {styles.container}
                activeOpacity={0.7}
                onPress={() => {onPagePress()}}
            >
                <Text style = {styles.titleText}>{item?.title}</Text>
                <Image 
                    style={styles.pageIcon}
                    source={appIcons.next}
                />
            </TouchableOpacity>
            <View  style={styles.separatorLine}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 60,
        alignItems: 'center'
    },
    separatorLine: {
        width: Dimensions.get("screen").width - 40,
        alignSelf: 'center',
        height: 1,
        backgroundColor: 'gray'
    },
    pageIcon: {
        width: 30,
        height: 30
    },
    titleText: {
        fontSize: 18,
        color: appColors.black,
        fontFamily: 'FlameRegular'
    }
})

export default PageItem;