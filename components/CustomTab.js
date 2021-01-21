import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import Colors from '../constants/style/Colors';

const CustomTab = (props) => {
    return ( 
        <View style={{...styles.container, backgroundColor: props.isActive ? Colors.dark.green : 'white'}}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    text: {
        fontFamily: 'scribble',
        color: 'black'
    }
})
 
export default CustomTab;