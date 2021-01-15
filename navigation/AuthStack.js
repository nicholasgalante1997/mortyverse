import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import AuthScreen from '../screens/Auth'
import Landing from '../screens/Landing'

const AuthStack = createStackNavigator({
    Landing: {
        screen: Landing,
        navigationOptions: {
            headerShown: false
        }
    },
    Auth: {
        screen: AuthScreen,
        navigationOptions: {
            headerShown: false
        }
    }
})

export default createAppContainer(AuthStack)