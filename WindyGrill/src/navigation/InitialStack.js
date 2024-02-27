import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';
import { screens } from '../helper/strings';
import InitialScreen from '../screens/initial/initialScreen/InitialScreen';

const InitialStack = () => {
    // variable of stack
    const Stack = createNativeStackNavigator();

    // main return
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={InitialScreen}
                name={screens.initialScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                component={AuthStack}
                name={screens.authStack}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                component={MainTabNavigator}
                name={screens.mainTab}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>

    )
}

export default InitialStack;
