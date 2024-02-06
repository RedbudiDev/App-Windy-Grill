import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMoreScreen from '../../screens/moreStackScreens/mainMoreScreen/MainMoreScreen';
import FeedbackScreen from '../../screens/moreStackScreens/feedbackScreen/FeedbackScreen';
import { screens } from '../../helper/strings';
const MoreTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                component={MainMoreScreen}
                name={screens.moreTabMainScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                component={FeedbackScreen}
                name={screens.feedbackScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default MoreTabStack;