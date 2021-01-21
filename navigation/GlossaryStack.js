import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import GlossaryLanding from '../screens/GlossaryLanding'

const GlossaryStack = createStackNavigator({
    GlossaryLanding: {
        screen: GlossaryLanding,
        navigationOptions: {
            headerTitle: "Find Shit Out",
            headerTitleStyle: {
                fontFamily: 'scribble'
            },
            headerLeft: () => null
        }
    }
})

export default createAppContainer(GlossaryStack)
