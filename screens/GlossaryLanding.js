import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image, Dimensions} from 'react-native';

import {useSelector} from 'react-redux';
import LocationData from '../constants/data/location';
import EpisodeData from '../constants/data/episode'

import Colors from '../constants/style/Colors';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import SearchBar from '../components/CustomSearch';
import CustomTabHeader from '../components/CustomTabHeader';
import CustomTabIcon from '../components/CustomTabIcon'
import Nav from '../components/Nav'
import Drawer from '../components/Drawer'

const initialTabState = {
    locations: false,
    characters: true,
    episodes: false
}

const Glossary = (props) => {

    const locations = useSelector(state => state.locations);
    const episodes = useSelector(state => state.episodes);
    const characters = useSelector(state => state.characters);
    const [searchedTerm, setSearchedTerm] = useState("");
    const [filteredCharacters, setFilteredCharacters] = useState(characters);
    const [filteredLocations, setFilteredLocations] = useState(locations);
    const [filteredEpisodes, setFilteredEpisodes] = useState(episodes);
    const [tabState, setTabState] = useState(initialTabState);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const hideDrawer = () => setDrawerVisible(false);
    const openDrawer = () => setDrawerVisible(true);

    // useEffect(() => {
    //     if (episodes.length > 0 && locations.length > 0){
    //        const [adjustedEpisodes, adjustedLocations] = attachImagesToEpisodesAndLocations(episodes, locations)
    //        setEpisodes(adjustedEpisodes);
    //        setLocations(adjustedLocations);

    //     }
    // }, [episodes, locations])

    useEffect(() => {
        if (characters.length > 0){
            setFilteredCharacters(characters.filter(char => char.name.includes(searchedTerm)))
        }
    }, [searchedTerm, characters])

    useEffect(() => {
        if (locations.length > 0){
            const adjustedLocations = adaptLocations(locations);
            setFilteredLocations(adjustedLocations.filter(location => location.name.includes(searchedTerm)));
        }
    }, [searchedTerm, locations])

    useEffect(() => {
        if (episodes.length > 0){
            const adjustedEpisodes = adaptEpisodes(episodes);
            setFilteredEpisodes(adjustedEpisodes.filter(episode => episode.name.includes(searchedTerm)));
        }
    }, [episodes, searchedTerm])

    useEffect(() => {
        console.log({filteredEpisodes})
    }, [filteredEpisodes])

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

    const adaptLocations = (locations) => {
        const adaptedLocations = locations.map(location => {
            let asset = LocationData.filter(locationSupport => locationSupport.id === location.id)[0];
            if (!asset){
                asset = { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIik1h7nJRbUG0tpz1I4ghEbojMcUBo-gnpQ&usqp=CAU' };
            }
            return {...location, ...asset};
        })
        return adaptedLocations;
    }

    const adaptEpisodes = (epiosdes) => {
        const adaptedEpisodes = episodes.map(episode => {
            const asset = EpisodeData.filter(episodeSupport => 
                episodeSupport.episode === episode.episode)[0];
            return {...episode, ...asset};
        });
        return adaptedEpisodes;
    }

    // const attachImagesToEpisodesAndLocations = (episodes, locations) => {
    //     const adaptedEpisodes = episodes.map(episode => {
    //         const asset = EpisodeData.filter(episodeSupport => 
    //             episodeSupport.episode === episode.episode)[0];
    //         return {...episode, ...asset};
    //     })
    //     const adaptedLocations = locations.map(location => {
    //         let asset = LocationData.filter(locationSupport => locationSupport.id === location.id)[0];
    //         if (!asset){
    //             asset = { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIik1h7nJRbUG0tpz1I4ghEbojMcUBo-gnpQ&usqp=CAU' };
    //         }
    //         return {...location, ...asset};
    //     })
    //     return [adaptedEpisodes, adaptedLocations];
    // }

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
                <Image source={{uri: itemData.item.image }} style={{height: '100%', width: '100%', resizeMode: 'cover'}}/>
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

    const episodeRenderItem = (itemData) => (
        <View style={{height: 150, width: Dimensions.get('window').width * 0.9, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <View style={{height: 100, width: 100, borderRadius: 30, overflow:'hidden'}}>
                <Image source={{uri: itemData.item.thumbnail }} style={{height: '100%', width: '100%', resizeMode: 'cover'}}/>
            </View>
            <View style={{marginLeft: 10, width: '50%'}}>
                <Text style={{fontFamily: 'adult-swim', color: Colors.utility.link, fontSize: 24}}>
                    {itemData.item.name}
                </Text>
                <Text style={{fontFamily: 'adult-swim', fontSize: 12}}>
                    {itemData.item.episode}
                </Text>
                <Text style={{fontFamily: 'adult-swim', fontSize: 12}}>
                    Aired: {itemData.item.air_date}
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
            <Nav 
                left={() => 
                    <Ionicons name="menu" 
                    size={24} 
                    color="white" 
                    onPress={openDrawer} 
                    />} 
                title="Glossary" 
                subtitle="Yeah I know just what you wanted" 
            />
            <Drawer visible={drawerVisible} toggleVisibility={hideDrawer} />
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
                    data={filteredLocations}
                    contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
                    style={{width: Dimensions.get('window').width * 0.9, marginTop: 10, borderRadius: 15}}
                    renderItem={locationRenderItem}
                /> : null 
            }
            {
                tabState.episodes ? 
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={filteredEpisodes}
                    contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
                    style={{width: Dimensions.get('window').width * 0.9, marginTop: 10, borderRadius: 15}}
                    renderItem={episodeRenderItem}
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