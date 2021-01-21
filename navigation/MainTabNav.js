import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import CYOAStack from './CYOAStack'
import GlossaryStack from './GlossaryStack'
import ProfileStack from './ProfileStack'
import CustomTabIcon from '../components/CustomTabIcon'
import Colors from '../constants/style/Colors'

const tabScreenConfiguration = {
    CYOA: {
        screen: CYOAStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (
            <CustomTabIcon 
                color={tabInfo.tintColor}
            />
            )
        }
    },
    Glossary: {
        screen: GlossaryStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (
            <CustomTabIcon 
                color={tabInfo.tintColor}
            />
            )
        }
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => (
            <CustomTabIcon 
                color={tabInfo.tintColor}
                />
            )
        }
    }
}

const tabOptionsConfiguration = {
    tabBarOptions: {
        labelStyle: {
            fontFamily: 'adult-swim',
            paddingTop: 30
        },
        activeTintColor: Colors.utility.link,
        labelPosition: 'below-icon'
    }
}

const MainTabNavigator = createBottomTabNavigator(tabScreenConfiguration, tabOptionsConfiguration)

export default createAppContainer(MainTabNavigator)