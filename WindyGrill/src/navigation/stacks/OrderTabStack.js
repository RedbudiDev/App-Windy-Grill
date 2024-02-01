import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DevelopmentScreen from '../../screens/DevelopmentScreen';
import { screens } from '../../helper/strings';
const OrderTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={DevelopmentScreen}
                name={screens.developmentOrder}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default OrderTabStack;