import React, { useEffect, useState } from 'react';
import { View, Image, Animated, Dimensions } from 'react-native';
import { appIcons } from '../../../helper/icons';

const FallingImage = (props) => {

    const {
        doNavigate = () => {}
    } = props;
    

    const [topBunAnim] = useState(new Animated.Value(-Dimensions.get('screen').height));
    const [burgerAnim] = useState(new Animated.Value(-Dimensions.get('screen').width));
    const [bottomBunAnim] = useState(new Animated.Value(Dimensions.get('screen').height * 2));

    useEffect(() => {
        const animateParts = () => {
            const topBunAnimRef = Animated.timing(topBunAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            });

            const burgerAnimRef = Animated.timing(burgerAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                delay: 0,
            });

            const bottomBunAnimRef = Animated.timing(bottomBunAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                delay: 0,
            });

            // Sekvencijalno pokrećemo animacije koristeći Animated.sequence()
            Animated.sequence([topBunAnimRef, burgerAnimRef, bottomBunAnimRef]).start(() => {
                doNavigate()
            });
        };
        animateParts();
    }, []);


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View style={{
                width: 250,
                height: 80,
                borderTopLeftRadius: 150,
                borderTopRightRadius: 150,
                backgroundColor: 'orange',
                overflow: 'hidden',
                transform: [
                    {
                        translateY: topBunAnim
                    }
                ]
            }} />
            <Animated.Image
                source={appIcons.more}
                style={{
                    width: 250,
                    height: 80,
                    transform: [{ translateX: burgerAnim }],

                }}
                resizeMode="cover"
            />
            <Animated.View style={{
                width: 250,
                height: 80,
                borderBottomLeftRadius: 150,
                borderBottomRightRadius: 150,
                backgroundColor: 'orange',
                overflow: 'hidden',
                transform: [
                    {
                        translateY: bottomBunAnim
                    }
                ]
            }} />
        </View>
    );
};

export default FallingImage;
