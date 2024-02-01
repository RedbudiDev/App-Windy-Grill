import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DevelopmentScreen from '../../screens/DevelopmentScreen';
import { screens } from '../../helper/strings';
const HomeTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={DevelopmentScreen}
                name={screens.developmentHome}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeTabStack;