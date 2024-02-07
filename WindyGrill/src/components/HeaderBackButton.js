import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { appIcons } from '../helper/icons';

const HeaderBackButton = (props) => {

    const {
        onLeftIconPress = () => { }, // prop for callback from header
    } = props;

    // function for rendering left icon
    const _renderLeftIcon = () => {
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
    return (
        <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
            <View style={styles.container}>
                {_renderLeftIcon()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default HeaderBackButton;