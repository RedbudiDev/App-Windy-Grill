import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';
import { screens } from '../helper/strings';
import { useSelector } from 'react-redux';

const SeparatedStack = () => {
    // variable of stack
    const Stack = createNativeStackNavigator();

    // redux token state
    const token = useSelector((state) => state.auth.token);

    // main return
    return (
        <Stack.Navigator>
            {
                !token ?
                    <Stack.Screen
                        component={AuthStack}
                        name={screens.authStack}
                        options={{
                            headerShown: false,
                        }}
                    />
                    :
                    <Stack.Screen
                        component={MainTabNavigator}
                        name={screens.mainTab}
                        options={{
                            headerShown: false,
                        }}
                    />
            }

        </Stack.Navigator>

    )
}

export default SeparatedStack;
