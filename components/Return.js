import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Dimensions,
    Image
} from 'react-native'
import PickleButton from '../components/PickleButton'
import Colors from '../constants/style/Colors'

const ReturnForm = (props) => {

    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)

    const { handleSignIn, toggleForm } = props;

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
                    Well, well, well, look who decided to show up.
                </Text>
            </View>

            <View style={styles.imageAndInputContainer}>

                <Image 
                source={require('../assets/portal.png')} 
                style={styles.image} 
                />

                <View style={styles.labelContainer}>
                    <Text style={styles.registerText}>
                        sign in
                    </Text>
                </View>

                <View style={{...styles.inputContainer, marginTop: 20}}>
                    <TextInput 
                        style={styles.input}
                        value={email}
                        autoCapitalize="none"
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
            
            <TouchableOpacity style={styles.toggleAuthLink} onPress={toggleForm}>
                <Text style={styles.linkText}>
                    New User?
                </Text>
            </TouchableOpacity>
            
            <PickleButton 
                onPress={() => handleSignIn(email, password)} 
                text="Welcome Back!" 
            />
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
        height: Dimensions.get('window').height / 5,
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
        height: Dimensions.get('window').height / 3.5, 
        width: Dimensions.get('window').height / 3.5,  
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: Dimensions.get('window').height * 0.10,
        borderRadius: (Dimensions.get('window').height / 3.5) / 2, 
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
        bottom: "80%", 
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
        bottom: "80%", 
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    registerText: {
        fontFamily: 'shrill', 
        color: 'black', 
        fontSize: 36
    },
    toggleAuthLink: {
        marginBottom: 40, 
        borderBottomWidth: 1, 
        borderBottomColor: Colors.utility.link
    },
    linkText: {
        color: Colors.utility.link, 
        fontFamily: 'adult-swim'
    }
})
 
export default ReturnForm;