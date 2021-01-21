import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import CYOALanding from '../screens/CYOALanding'

const CYOAStack = createStackNavigator({
    CYOALanding: {
        screen: CYOALanding,
        navigationOptions: {
            headerTitle: "Choose Your Own Adventure",
            headerTitleStyle: {
                fontFamily: 'scribble'
            },
            headerLeft: () => null
        }
    }
})

export default createAppContainer(CYOAStack)
