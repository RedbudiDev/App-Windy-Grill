import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTabStack from './stacks/HomeTabStack';
import OffersTabStack from './stacks/OffersTabStack';
import OrderTabStack from './stacks/OrderTabStack';
import ReorderTabStack from './stacks/ReorderTabStack';
import MoreTabStack from './stacks/MoreTabStack';

import { screens } from '../helper/strings';
import { appColors } from '../helper/colors';

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
            component: HomeTabStack,
            title: "Home",
            labelTitle: "Home",

        },
        {
            id: 2,
            name: screens?.offersTab,
            component: OffersTabStack,
            title: "Offers",
            labelTitle: "Offers"
        },
        {
            id: 3,
            name: screens?.orderTab,
            component: OrderTabStack,
            title: "Order",
            labelTitle: "Order"
        },
        {
            id: 4,
            name: screens?.reorderTab,
            component: ReorderTabStack,
            title: "Reorder",
            labelTitle: "Reorder"
        },
        {
            id: 5,
            name: screens?.moreTab,
            component: MoreTabStack,
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
                    backgroundColor: appColors.white
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