import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DevelopmentScreen from '../screens/DevelopmentScreen';

import { screens } from '../helper/strings';

const MainTabNavigator = () => {

    // variable of Tab Stack
    const Tab = createBottomTabNavigator();

    /**
     * array of 5 tabs
     */
    const tabs = [
        {
            id: 1,
            name: screens?.homeTab,
            component: DevelopmentScreen,
            title: "Home",
            labelTitle: "Home",

        },
        {
            id: 2,
            name: screens?.offersTab,
            component: DevelopmentScreen,
            title: "Offers",
            labelTitle: "Offers"
        },
        {
            id: 3,
            name: screens?.orderTab,
            component: DevelopmentScreen,
            title: "Order",
            labelTitle: "Order"
        },
        {
            id: 4,
            name: screens?.reorderTab,
            component: DevelopmentScreen,
            title: "Reorder",
            labelTitle: "Reorder"
        },
        {
            id: 5,
            name: screens?.moreTab,
            component: DevelopmentScreen,
            // icon: appIcons.product,
            title: "More",
            labelTitle: "More"
        }
    ]

    // main return  
    return (
        <Tab.Navigator
            initialRouteName={screens.homeTab}
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: 'blue',
                tabBarInactiveBackgroundColor: 'red',
                tabBarStyle: {
                    height: 70,
                    backgroundColor: 'white'
                }
            }}
        >
            {
                /** mapping tab array in main return */
                tabs?.map((tab) => {
                    const { name, component, title, labelTitle, id } = tab;
                    return (
                        <Tab.Screen
                            key={id}
                            name={name}
                            component={component}
                            title={title}
                            options={({ route }) => {
                                return ({
                                    title: title,
                                    tabBarShowLabel: false,
                                    tabBarIcon: ({ focused }) => {
                                        return (
                                            <View style={styles.labelContainer}>
                                                <Text>{labelTitle}</Text>
                                            </View>
                                        )
                                    }

                                })
                            }}
                        />
                    )
                })
            }

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    labelContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MainTabNavigator;