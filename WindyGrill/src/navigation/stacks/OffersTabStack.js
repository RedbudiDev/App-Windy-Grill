import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OffersMainScreen from '../../screens/offersStackScreens/offersMainScreen/OffersMainScreen';
import ProductDetailScreen from '../../screens/homeStackScreens/productDetailScreen/ProductDetailScreen';
import { screens } from '../../helper/strings';

const OffersTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={OffersMainScreen}
                name={screens.offersMainScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={ProductDetailScreen}
                name={screens.productDetailOffersTabScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default OffersTabStack;