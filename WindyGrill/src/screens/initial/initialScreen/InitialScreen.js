import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FallingImage from '../components/FallingImage';

import { appColors } from '../../../helper/colors';
import { screens } from '../../../helper/strings';

const InitialScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FallingImage
                doNavigate={() => { setTimeout(() => { navigation.replace(screens.separatedStack) }, 1000) }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default InitialScreen;