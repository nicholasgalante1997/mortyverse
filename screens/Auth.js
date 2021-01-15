import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import firebase from '../firebase'

const AuthScreen = (props) => {

    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const handleRegister = (email, password) => {
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => console.log(response))
        .catch(err => console.log(err)) 
    }

    return ( 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'schwifty', fontSize: 46}}>
                    Rick and Morty
                </Text>
                <Text style={{fontFamily: 'schwifty', fontSize: 32, marginTop: 15}}>
                    Choose Your own Adventure
                </Text>
            </View>
            <View style={{width: '90%', justifyContent: 'center', alignItems: 'center', padding: 10}}>
                <Text style={{fontFamily: 'scribble'}}>
                    Wha wha what did you think there wasn't going to be a sign in. 
                </Text>
                <Text style={{fontFamily: 'scribble', marginTop: 8}}>
                It's the 21st century Morty of course there's a sign in. 
                </Text>
                <Text style={{fontFamily: 'cartoon', textAlign: 'center', marginTop: 8}}>
                    Aw jeez Rick, I don't know, I feel like people today are pretty hesitant to just like hand out their information online?
                </Text>
                <Text style={{fontFamily: 'scribble', textAlign: 'center', marginTop: 8}}>
                You really think I'm gonna fuck over my fans Morty? I mean this isn't Game of Thrones, it's the Rick and Morty choose your own Adventure app. This is about having adventures, and not caring. 
                </Text>
            </View>
            <TextInput 
                style={{width: '50%'}}
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="email"
                keyboardType="default"
            />
            <TextInput 
                style={{width: '50%', marginTop: 20}}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="password"
                keyboardType="default"
                secureTextEntry={true}
            />

            <Button 
            onPress={() => handleRegister(email, password)} 
            title="Submit" />

        </View>
     );
}
 
export default AuthScreen;