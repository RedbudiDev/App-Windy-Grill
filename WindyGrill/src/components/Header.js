import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { appColors } from '../helper/colors';
import { appIcons } from '../helper/icons';

const Header = (props) => {
    const {
        showLeftIcon = false, // prop for showing left icon
        showRightIcon = false, // prop for showint right icon
        onLeftIconPress = () => { }, // prop for click on left icpn
        onRightIconPress = () => { }, // prop for click on right icon
        showLocationText = true, // prop for showing location text + image
    } = props;

    // function for rendering left icon
    const _renderLeftIcon = () => {
        if (showLeftIcon) {
            return (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { onLeftIconPress() }}
                >
                    <Image
                        style={{ width: 35, height: 35, transform: [{ rotate: '180 deg' }] }}
                        source={appIcons.next}
                    />
                </TouchableOpacity>
            )
        } else {
            return (
                <View
                    style={{ width: 35, height: 35 }}
                />
            )
        }
    }
    // function for rendering right icon
    const _renderRightIcon = () => {
        if (showRightIcon) {
            return (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { onRightIconPress() }}
                >
                    <Image
                        style={{ width: 35, height: 35 }}
                        source={appIcons.cart}
                    />
                </TouchableOpacity>
            )
        } else {
            return (
                <View
                    style={{ width: 35, height: 35 }}
                />
            )
        }
    }

    const _renderLocationText = () => {
        if(showLocationText) {
            return (
                <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={appIcons.map}
                        style={{ width: 28, height: 28 }}
                    />
                    <Text style={{ marginLeft: 5, color: appColors.black }} numberOfLines={2}>Svetog save 42, sprat 5, stan nn.</Text>
                </View> 
            )
        } else {
            return null
        }
    }
    return (
        <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
            <View style={styles.container}>
                {_renderLeftIcon()}
                <View>
                    <Image
                        style={{ width: 70, height: 70 }}
                        source={appIcons.logo}
                    />
                </View>
                {_renderRightIcon()}
            </View>
            {_renderLocationText()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})

export default Header;