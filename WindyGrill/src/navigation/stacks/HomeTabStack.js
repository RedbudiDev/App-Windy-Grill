import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../../helper/strings';
import MainHomeScreen from '../../screens/homeStackScreens/mainHomeScreen/MainHomeScreen';
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
        </Stack.Navigator>
    )
}

export default HomeTabStack;