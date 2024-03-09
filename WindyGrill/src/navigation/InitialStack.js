import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';
import { screens } from '../helper/strings';
import InitialScreen from '../screens/initial/initialScreen/InitialScreen';
import { useSelector } from 'react-redux';

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

export default InitialStack;
