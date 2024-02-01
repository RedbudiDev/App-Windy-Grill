import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DevelopmentScreen from '../../screens/DevelopmentScreen';
import { screens } from '../../helper/strings';
const ReorderTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={DevelopmentScreen}
                name={screens.developmentReorder}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default ReorderTabStack;