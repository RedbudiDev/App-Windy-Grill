import React from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { appColors } from '../../../../helper/colors';

const { width } = Dimensions.get('screen');
const Pagination = (props) => {
    const {
        data = [], // data for pagination
        scrollX = -1, // position of scoll x
    } = props;

    return (
        <View style={styles.container}>
            {
                data?.map((_, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]

                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [12, 22, 12],
                        extrapolate: 'clamp'
                    });

                    const backgroundColor = scrollX.interpolate({
                        inputRange,
                        outputRange: [appColors.red, appColors.black, appColors.red],
                        extrapolate: 'clamp'
                    });

                    return <Animated.View key={index.toString()} style={[styles.dot, { width: dotWidth, backgroundColor }]} />

                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: appColors.red,
        marginHorizontal: 3
    }
})

export default Pagination;