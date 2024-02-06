import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { appColors } from '../../../helper/colors';

const FeedbackScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
    }
})

export default FeedbackScreen;