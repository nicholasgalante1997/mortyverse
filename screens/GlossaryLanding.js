import React from 'react';
import {View, StyleSheet, Text} from 'react-native'
import {useSelector} from 'react-redux'

const Glossary = (props) => {
    
    const locations = useSelector(state => state.locations)
    const episodes = useSelector(state => state.episodes)
    const characters = useSelector(state => state.episodes)

    console.log(locations, "locations")
    console.log(episodes, "episodes")
    console.log(characters, "characters")

    return ( 
        <View>
            <Text>
                Glossary
            </Text>
        </View>
     );
}
 
export default Glossary;