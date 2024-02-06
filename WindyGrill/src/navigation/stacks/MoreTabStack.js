import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMoreScreen from '../../screens/moreStackScreens/mainMoreScreen/MainMoreScreen';
import FeedbackScreen from '../../screens/moreStackScreens/feedbackScreen/FeedbackScreen';
import CartScreen from '../../screens/moreStackScreens/cartScreen/CartScreen';
import { screens } from '../../helper/strings';
import RegisterScreen from '../../screens/moreStackScreens/registerScreen/RegisterScreen';

const MoreTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={MainMoreScreen}
                name={screens.moreTabMainScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={FeedbackScreen}
                name={screens.feedbackScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={CartScreen}
                name={screens.cartScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={RegisterScreen}
                name={screens.registerScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default MoreTabStack;