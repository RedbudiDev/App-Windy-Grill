import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { appColors } from '../../../helper/colors';

const FallingImage = (props) => {
    const {
        doNavigate = () => { } // prop for callback after 0.5 seconds 
    } = props;

    React.useEffect(() => {
        doNavigate();
    });
    /** main return */
    return (
        <View style={{ flex: 1, backgroundColor: appColors.baseColor, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
                source={require('../../../../assets/animatios/lottieone.json')}
                style={{ width: '100%', height: 500 }}
                autoPlay
                loop
            />
        </View>
    );
};

export default FallingImage;
