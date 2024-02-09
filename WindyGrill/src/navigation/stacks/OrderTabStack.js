import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderMainScreen from '../../screens/orderStackScreens/orderMainScreen/OrderMainScreen';
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
        </Stack.Navigator>
    )
}

export default OrderTabStack;