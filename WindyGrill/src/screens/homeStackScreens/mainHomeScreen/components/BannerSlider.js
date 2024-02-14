import React, { useRef, useState } from 'react';
import { View, Dimensions, FlatList, Animated } from 'react-native';

import Pagination from './Pagination';
import SliderItem from './SliderItem';

const { width } = Dimensions.get('screen');

const BannerSlider = (props) => {

    const {
        data = [], // prop for data in banner
    } = props;

    const scrollX = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0);

    const _handleOnScroll = event => {
        Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX,
                        }
                    }
                },
            ],
            {
                useNativeDriver: false
            },
        )(event)
    }

    const _handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
        setIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50
    }).current;

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item, index }) => { return (<SliderItem />) }}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'center'}
                pagingEnabled={true}
                onScroll={_handleOnScroll}
                onViewableItemsChanged={_handleOnViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination data={data} scrollX={scrollX} currentIndex={index} />
        </View>
    )
}

export default BannerSlider;