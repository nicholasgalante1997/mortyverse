import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image, Dimensions} from 'react-native'
import Colors from '../constants/style/Colors'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import SearchBar from '../components/CustomSearch'
import CustomTabHeader from '../components/CustomTabHeader'
import {useSelector} from 'react-redux'
import LocationData from '../constants/data/locationData'

const initialTabState = {
    locations: false,
    characters: true,
    episodes: false
}

const Glossary = (props) => {

    const [searchedTerm, setSearchedTerm] = useState("")
    const [filteredCharacters, setFilteredCharacters] = useState(characters)
    const [tabState, setTabState] = useState(initialTabState)
    
    const locations = useSelector(state => state.locations)
    const episodes = useSelector(state => state.episodes)
    const characters = useSelector(state => state.characters)

    console.table(locations)
    console.table(episodes)

    useEffect(() => {
        if (characters.length > 0){
            setFilteredCharacters(characters.filter(char => char.name.includes(searchedTerm)))
        }
    }, [searchedTerm])

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

    const characterRenderItem = (itemData) => (
        <View style={{height: 150, width: Dimensions.get('window').width * 0.9, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <View style={{height: 100, width: 100, borderRadius: 30, overflow:'hidden'}}>
                <Image source={{uri: itemData.item.image}} style={{height: '100%', width: '100%', resizeMode: 'contain'}}/>
            </View>
            <View style={{marginLeft: 10, width: '50%'}}>
                <Text style={{fontFamily: 'adult-swim', color: Colors.utility.link, fontSize: 24}}>
                    {itemData.item.name}
                </Text>
                <Text style={{fontFamily: 'adult-swim', fontSize: 12}}>
                    {itemData.item.origin.name}
                </Text>
                <Text style={{fontFamily: 'adult-swim', fontSize: 12}}>
                    Status: {itemData.item.status}
                </Text>
            </View>
            <View style={{width: '20%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
                <MaterialIcons name="favorite-outline" size={34} color="red" />
                <AntDesign name="infocirlce" size={28} color={Colors.dark.lightGray} />
            </View>
        </View>
    )

    const locationRenderItem = (itemData) => (
        <View style={{height: 150, width: Dimensions.get('window').width * 0.9, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <View style={{height: 100, width: 100, borderRadius: 30, overflow:'hidden'}}>
                <Image source={{uri: LocationData.filter(location => location.id === itemData.item.id ).length > 0 ? LocationData.filter(location => location.id === itemData.item.id )[0].image : ""}} style={{height: '100%', width: '100%', resizeMode: 'contain'}}/>
            </View>
            <View style={{marginLeft: 10, width: '50%'}}>
                <Text style={{fontFamily: 'adult-swim', color: Colors.utility.link, fontSize: 24}}>
                    {itemData.item.name}
                </Text>
                <Text style={{fontFamily: 'adult-swim', fontSize: 12}}>
                    {itemData.item.dimension}
                </Text>
                <Text style={{fontFamily: 'adult-swim', fontSize: 12}}>
                    Status: {itemData.item.type}
                </Text>
            </View>
            <View style={{width: '20%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
                <MaterialIcons name="favorite-outline" size={34} color="red" />
                <AntDesign name="infocirlce" size={28} color={Colors.dark.lightGray} />
            </View>
        </View>
    )

    return ( 
        <View style={styles.screen}>
            <SearchBar 
                value={searchedTerm} 
                onChangeText={setSearchedTerm} 
                placeholder="Search for a character, or location" 
            />
            <CustomTabHeader tabs={tabInfo} />
            { tabState.characters ?
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={filteredCharacters}
                    contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
                    style={{width: Dimensions.get('window').width * 0.9, marginTop: 10, borderRadius: 15}}
                    renderItem={characterRenderItem}
                /> : null 
            }
            {
                tabState.locations ? 
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={locations}
                    contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
                    style={{width: Dimensions.get('window').width * 0.9, marginTop: 10, borderRadius: 15}}
                    renderItem={locationRenderItem}
                /> : null 
            }
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