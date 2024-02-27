import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthStack';
import { screens } from '../helper/strings';

const InitialStack = () => {
    // variable of stack
    const Stack = createNativeStackNavigator();
    
    // main return
    return (
        <Stack.Navigator>
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
