import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import Colors from '../constants/style/Colors'
import SearchBar from '../components/CustomSearch'
import CustomTabHeader from '../components/CustomTabHeader'
import {useSelector} from 'react-redux'

const initialTabState = {
    locations: false,
    characters: true,
    episodes: false
}

const Glossary = (props) => {

    const [searchedTerm, setSearchedTerm] = useState("")
    const [tabState, setTabState] = useState(initialTabState)
    
    const locations = useSelector(state => state.locations)
    const episodes = useSelector(state => state.episodes)
    const characters = useSelector(state => state.characters)

    console.table(characters)

    const tabInfo = [
        {
            name: "Characters",
            isActive: tabState.characters,
            onPress: () => handleTabPress('char')
        },
        {
            name: 'Locations',
            isActive: tabState.locations,
            onPress: () => handleTabPress("location")
        },
        {
            name: 'Episodes',
            isActive: tabState.episodes,
            onPress: () => handleTabPress('episode')
        }
    ]

    const handleTabPress = (tab) => {
        let newTabState;
        switch(tab){
            case 'char': 
                 newTabState = {
                    locations: false,
                    episodes: false,
                    characters: true
                }
                setTabState(newTabState)
                break;
            case 'location': 
                 newTabState = {
                    locations: true,
                    episodes: false,
                    characters: false
                }
                setTabState(newTabState)
                break;
            case 'episode':
                 newTabState = {
                    locations: false,
                    episodes: true,
                    characters: false
                }
                setTabState(newTabState)
                break;
            default:
                return
        }
    }

    return ( 
        <View style={styles.screen}>
            <SearchBar 
                value={searchedTerm} 
                onChangeText={setSearchedTerm} 
                placeholder="Search for a character, or location" 
            />
            <CustomTabHeader tabs={tabInfo} />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.dark.screen,
        alignItems: 'center'
    }
})
 
export default Glossary;