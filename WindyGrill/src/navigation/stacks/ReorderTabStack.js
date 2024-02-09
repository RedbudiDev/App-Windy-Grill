import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReorderLoginScreen from '../../screens/reorderStackScreens/reorderNoLoginScreen/ReordeLoginScreen';
import { screens } from '../../helper/strings';
const ReorderTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={ReorderLoginScreen}
                name={screens.reorderNoLoginScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default ReorderTabStack;