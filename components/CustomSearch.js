import React from 'react'
import {View, TextInput, StyleSheet, Dimensions} from 'react-native'
import Colors from '../constants/style/Colors'
import { Ionicons } from '@expo/vector-icons'; 

const SearchBar = (props) => {
    return ( 
        <View style={styles.container}>
            <TextInput 
                keyboardType="default"
                value={props.value}
                onChangeText={(text) => props.onChangeText(text)}
                placeholder={props.placeholder}
                style={styles.search}
                returnKeyType="search"
            />
            <Ionicons 
                name="search-circle-sharp" 
                size={36} 
                color="white"
                onPress={props.onPress} 
            />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.05,
        backgroundColor: Colors.dark.lightGray,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    search: {
        height: '60%',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 15,
        fontFamily: 'adult-swim',
        paddingHorizontal: 7
    }
})
 
export default SearchBar;