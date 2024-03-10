import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Platform
} from 'react-native';
import { appColors } from '../helper/colors';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={Platform.OS === 'ios' ? 'large' : 40}
                color={appColors.baseColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loading;