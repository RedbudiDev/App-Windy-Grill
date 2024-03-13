import React from 'react';
import { View, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import { appIcons } from '../../../../helper/icons';

const { width, height } = Dimensions.get('screen');

const SliderItem = () => {

    // animated value for translateY in image:
    const translateYImage = new Animated.Value(40);

    // handling animation:
    Animated.timing(translateYImage, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce
    }).start();


    // main return
    return (
        <View style={styles.container}>
            <Animated.Image
                style={
                    [
                        styles.image,
                        // { transform: [{ translateY: translateYImage }] }
                    ]
                }
                source={appIcons.burgerImage}
                resizeMode={'contain'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height: 250
    },
    image: {
        width: '100%',
        height: 250,
    }
})

export default SliderItem;