import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../helper/strings';
import MainHomeScreen from '../../screens/homeStackScreens/mainHomeScreen/MainHomeScreen';
import ProductDetailScreen from '../../screens/homeStackScreens/productDetailScreen/ProductDetailScreen';
const HomeTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={MainHomeScreen}
                name={screens.homeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={ProductDetailScreen}
                name={screens.productDetailHomeTabScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeTabStack;