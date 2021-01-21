import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProfileLanding from '../screens/ProfileLanding'

const ProfileStack = createStackNavigator({
    ProfileLanding: {
        screen: ProfileLanding,
        navigationOptions: {
            headerTitle: "This guy",
            headerTitleStyle: {
                fontFamily: 'scribble'
            },
            headerLeft: () => null
        }
    }
})

export default createAppContainer(ProfileStack)
