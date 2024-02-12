import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderMainScreen from '../../screens/orderStackScreens/orderMainScreen/OrderMainScreen';
import ProductDetailScreen from '../../screens/homeStackScreens/productDetailScreen/ProductDetailScreen';
import { screens } from '../../helper/strings';
const OrderTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={OrderMainScreen}
                name={screens.orderMainScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={ProductDetailScreen}
                name={screens.productDetailOrderTabScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default OrderTabStack;