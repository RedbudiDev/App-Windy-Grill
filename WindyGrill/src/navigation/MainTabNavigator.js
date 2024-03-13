import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import usePolyglot from '../hooks/usePolyglot';

import HomeTabStack from './stacks/HomeTabStack';
import OffersTabStack from './stacks/OffersTabStack';
import OrderTabStack from './stacks/OrderTabStack';
import ReorderTabStack from './stacks/ReorderTabStack';
import MoreTabStack from './stacks/MoreTabStack';

import { globalStyles } from '../helper/globalStyles';
import { screens } from '../helper/strings';
import { appColors } from '../helper/colors';
import { appIcons } from '../helper/icons';

const MainTabNavigator = () => {

    // variable of Tab Stack
    const Tab = createBottomTabNavigator();

    const __ = usePolyglot();

    /**
     * array of 5 tabs
     */
    const tabs = [
        {
            id: 1,
            name: screens?.homeTab,
            component: HomeTabStack,
            title: "Home",
            icon: appIcons.home,
            labelTitle: __("Početna"),

        },
        {
            id: 2,
            name: screens?.offersTab,
            component: OffersTabStack,
            title: "Offers",
            icon: appIcons.profit,
            labelTitle: __('Ponude')
        },
        {
            id: 3,
            name: screens?.orderTab,
            component: OrderTabStack,
            title: "Order",
            icon: appIcons.burger,
            labelTitle: __("Naruči")
        },
        {
            id: 4,
            name: screens?.reorderTab,
            component: ReorderTabStack,
            title: "Reorder",
            icon: appIcons.reload,
            labelTitle: __("Ponovi")
        },
        {
            id: 5,
            name: screens?.moreTab,
            component: MoreTabStack,
            title: "More",
            icon: appIcons.more,
            labelTitle: __("Još")
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
                    height: Dimensions.get('screen').height / 10,
                    backgroundColor: appColors.white,
                }
            }}
        >
            {
                /** mapping tab array in main return */
                tabs?.map((tab) => {
                    const { name, component, title, labelTitle, id, icon } = tab;
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
                                                <Image
                                                    style={{ width: 25, height: 25 }}
                                                    source={icon}
                                                    tintColor={focused ? appColors.red : appColors.black}
                                                />
                                                <Text style={[styles.textLabel, { color: focused ? appColors.red : appColors.black }]}>{labelTitle}</Text>
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
        justifyContent: 'center',
        backgroundColor: appColors.backgroundDarker
    },
    textLabel: {
        marginTop: 4,
        ...globalStyles.textFontSemiBold
    }
})

export default MainTabNavigator;