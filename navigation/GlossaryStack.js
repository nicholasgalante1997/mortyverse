import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import GlossaryLanding from '../screens/GlossaryLanding'

const GlossaryStack = createStackNavigator({
    GlossaryLanding: {
        screen: GlossaryLanding,
        navigationOptions: {
            headerTitle: "Character Glossary",
            headerTitleStyle: {
                fontFamily: 'adult-swim',
                fontSize: 24,
                color: '#97ce4c'
            },
            headerLeft: () => null
        }
    }
})

export default createAppContainer(GlossaryStack)
