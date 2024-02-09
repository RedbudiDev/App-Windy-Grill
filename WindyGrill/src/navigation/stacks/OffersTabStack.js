import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OffersMainScreen from '../../screens/offersStackScreens/offersMainScreen/OffersMainScreen';
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
        </Stack.Navigator>
    )
}

export default OffersTabStack;