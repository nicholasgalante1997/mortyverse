import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Landing from '../screens/Landing'
import Auth from '../screens/Auth'
import MainTabNav from './MainTabNav'

const FullStackNavigator = createStackNavigator({
    Landing: {
        screen: Landing,
        navigationOptions: {
            headerShown: false
        }
    },
    Auth: {
        screen: Auth,
        navigationOptions: {
            headerShown: false
        }
    },
    Content: {
        screen: MainTabNav,
        navigationOptions: {
            headerShown: false
        }
    }
})

export default createAppContainer(FullStackNavigator)