import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Platform
} from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={Platform.OS === 'ios' ? 'large' : 40}
                color={'#000'}
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