import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

const PickleButton = (props) => {
    return ( 
        <View style={styles.main}>
            <TouchableOpacity 
                style={styles.main}
                onPress={props.onPress}
            >
            <View style={styles.imageContainer}>
                <Image source={require('../assets/pickle.png')} style={styles.image} />
            </View>
            
            <Text style={styles.text}>
                {props.text}
            </Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    main: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        height: 60,
        width: 60,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    text: {
        fontFamily: 'adult-swim',
        color: 'white',
        marginTop: 5
    }
})
 
export default PickleButton;