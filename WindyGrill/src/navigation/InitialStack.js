import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';
import { screens } from '../helper/strings';
import InitialScreen from '../screens/initial/initialScreen/InitialScreen';
import { useSelector } from 'react-redux';
import SeparatedStack from './SeparatedStack';

const InitialStack = () => {
    // variable of stack
    const Stack = createNativeStackNavigator();

    // redux token state
    const token = useSelector((state) => state.auth.token);

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
                component={SeparatedStack}
                name={screens.separatedStack}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>

    )
}

export default InitialStack;
