import React, {useState} from 'react';
import {
    View, 
    Alert
} from 'react-native'
import firebase from '../firebase'
import Colors from '../constants/style/Colors'
import Register from '../components/Register'

const AuthScreen = (props) => {

    const handleRegister = (email, password) => {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => console.log(response))
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

    return ( 
        <View style={{flex: 1, alignItems: 'center', backgroundColor: Colors.dark.screen}}>
            <Register handleRegister={handleRegister} />
        </View>
     );
}
 
export default AuthScreen;