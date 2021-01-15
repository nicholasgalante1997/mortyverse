import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Button, 
    Dimensions,
    Image
} from 'react-native'
import Colors from '../constants/style/Colors'

const Register = (props) => {

    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const { handleRegister } = props;

    return ( 
        <>
           
            <View style={styles.header}>
                <Text style={styles.title}>
                    Rick and Morty
                </Text>
                <Text style={styles.subTitle}>
                    Choose Your own Adventure
                </Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.scribbleTextTop}>
                    Wha wha what did you think there wasn't going to be a sign in. 
                </Text>
                <Text style={styles.scribbleTextBottom}>
                It's the 21st century Morty of course there's a sign in. 
                </Text>
                <Text style={styles.cartoonTextBottom}>
                    Aw jeez Rick, I don't know, I feel like people today are pretty hesitant to just like hand out their information online?
                </Text>
                <Text style={styles.scribbleTextBottom}>
                You really think I'm gonna fuck over my fans Morty? I mean this isn't Game of Thrones, it's the Rick and Morty choose your own Adventure app. This is about having adventures, and not caring. 
                </Text>
            </View>

            <View style={styles.imageAndInputContainer}>
                <Image 
                source={require('../assets/portal.png')} 
                style={styles.image} 
                />

                <View style={styles.labelContainer}>
                    <Text style={styles.registerText}>
                        Register
                    </Text>
                </View>
                <View style={{...styles.inputContainer, marginTop: 20}}>
                    <TextInput 
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="email"
                        placeholderTextColor="black"
                        keyboardType="default"
                    />
                </View>
                <View style={{...styles.inputContainer, marginTop: 20}}>
                    <TextInput 
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="password"
                        placeholderTextColor="black"
                        keyboardType="default"
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <Button 
            onPress={() => handleRegister(email, password)} 
            title="Submit" />
        </>

     );
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: Dimensions.get('window').height / 10
    },
    title: {
        fontFamily: 'schwifty', 
        fontSize: 46,
        color: Colors.dark.text
    },
    subTitle: {
        fontFamily: 'schwifty', 
        fontSize: 32, 
        marginTop: 15,
        color: Colors.dark.text
    },
    body: {
        width: '90%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10,
        marginTop: 10
    },
    scribbleTextTop: {
        fontFamily: 'scribble', 
        textAlign: 'center',
        color: Colors.dark.text
    },
    scribbleTextBottom: {
        fontFamily: 'scribble', 
        marginTop: 8, 
        textAlign: 'center',
        color: Colors.dark.text
    },
    cartoonTextBottom: {
        fontFamily: 'cartoon', 
        textAlign: 'center', 
        marginTop: 8,
        color: Colors.dark.text
    },
    imageAndInputContainer: {
        height: Dimensions.get('window').height / 3, 
        width: Dimensions.get('window').height / 3,  
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: Dimensions.get('window').height * 0.10,
        borderRadius: (Dimensions.get('window').height / 3) / 2, 
    },
    image: {
        height: '100%', 
        width: '100%', 
        // resizeMode: 'contain',
        borderRadius: (Dimensions.get('window').height / 3) / 2
    },
    inputContainer: {
        width: '45%', 
        height: 25, 
        position: 'relative', 
        bottom: "70%", 
        backgroundColor: 'white',
        paddingLeft: 10,
        justifyContent: 'center',
        borderRadius: 10
    },
    input: {
        width: '100%', 
        fontFamily: 'adult-swim'
    },
    labelContainer: {
        position: 'relative', 
        bottom: "70%", 
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    registerText: {
        fontFamily: 'shrill', 
        color: 'black', 
        fontSize: 36
    }
})
 
export default Register;