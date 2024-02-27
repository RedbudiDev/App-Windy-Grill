import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../helper/strings';

import ForgotPasswordScreen from '../screens/aurhentification/forgotPasswordScreen/ForgotPasswordScreen';
import LoginScreen from '../screens/aurhentification/login/LoginScreen';
import RegisterScreen from '../screens/aurhentification/registerScreen/RegisterScreen';

const HomeTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={LoginScreen}
                name={screens.loginScreen}
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
            <Stack.Screen 
                component={ForgotPasswordScreen}
                name={screens.forgotPasswordScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeTabStack;