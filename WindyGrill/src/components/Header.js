import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { appColors } from '../helper/colors';
import { appIcons } from '../helper/icons';

const Header = (props) => {
    const {
        showLeftIcon = false, // prop for showing left icon
        showRightIcon = false, // prop for showint right icon
        onLeftIconPress = () => { }, // prop for click on left icpn
        onRightIconPress = () => { }, // prop for click on right icon
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
        }
    }
    return (
        <View style={{ marginVertical: 10 }}>
            <View style={styles.container}>
                {_renderLeftIcon()}
                {/** TODO: header image render */}
                <Text style={{ color: appColors.black }}>Header Image</Text>
                {_renderRightIcon()}
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center' }}>
                <Image
                    source={appIcons.map}
                    style={{ width: 30, height: 30 }}
                />
                <Text style={{ marginLeft: 5, color: appColors.black }} numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default Header;