import React, {useState, useEffect} from 'react';
import {
    View, 
    Alert,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import firebase from '../firebase'
import {useSelector, useDispatch} from 'react-redux'
import * as userActions from '../store/actions/user'
import Colors from '../constants/style/Colors'
import Register from '../components/Register'
import ReturnForm from '../components/Return'

const AuthScreen = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    useEffect(() => {
        console.log(user)
    }, [user])

    const [showRegistration, setShowRegistration] = useState(true)

    const toggleRegistration = () => setShowRegistration(prevState => !prevState)

    const handleRegister = (email, password) => {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {

            const dispatchObject = {
                username: response.user.email,
                storageToken: response.user.refreshToken,
                uid: response.user.uid
            }

            dispatch(userActions.handleSignIn(dispatchObject))

        })
        .catch(err => {
            if (err.message === "The email address is badly formatted."){
                return Alert.alert(
                    "Hahahahah", 
                    "Did you really fuck up your email address? Dude you use this every day. Don't be a Jerry.", 
                    [{text: 'Sorry Rick', style: 'default'}]
                    )
            }
        }) 
    }

    const handleSignIn = (email, password) => {
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {

            const dispatchObject = {
                username: response.user.email,
                storageToken: response.user.refreshToken,
                uid: response.user.uid
            }

            dispatch(userActions.handleSignIn(dispatchObject))
        })
        .catch(err => {
            if (err.code === "auth/user-not-found"){
                return Alert.alert(
                    "Oh shit", 
                    "We have like no information at all on you. Check your email address, or sign up.", 
                    [{text: 'Yerp', style: 'default'}]
                    )
            }
        })
    }

    return ( 
        <View style={{flex: 1, alignItems: 'center', backgroundColor: Colors.dark.screen}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            { showRegistration ?
            <Register 
                handleRegister={handleRegister} 
                    toggleForm={toggleRegistration} 
            /> :
            <ReturnForm 
                handleSignIn={handleSignIn}
                    toggleForm={toggleRegistration}
                />
            }
            </TouchableWithoutFeedback>
        </View>
     );
}
 
export default AuthScreen;