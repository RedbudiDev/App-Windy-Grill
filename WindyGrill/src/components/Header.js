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
        customContainerStyle = {} // prop for container style
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

    return (
        <View style={{ paddingHorizontal: 10, ...customContainerStyle }}>
            <View style={styles.container}>
                {_renderLeftIcon()}
                <Image
                    style={{ width: 250, height: 60, marginBottom: 15 }}
                    source={appIcons.logowide}
                />
                {_renderRightIcon()}
            </View>
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