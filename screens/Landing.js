import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import Colors from '../constants/style/Colors'

// Redux State Imports
import {useDispatch, useSelector} from 'react-redux'
import * as locationActions from '../store/actions/locations'
import * as episodeActions from '../store/actions/episodes'
import * as characterActions from '../store/actions/characters'

// ENDPOINTS FOR API  
// Location
const LOC_TARGET = `https://rickandmortyapi.com/api/location`
// Characters
const CHAR_TARGET = `https://rickandmortyapi.com/api/character`
// Episodes
const EPI_TARGET = `https://rickandmortyapi.com/api/episode`

// Async Support
const axios = require('axios')

const Landing = (props) => {

    const dispatch = useDispatch();
    const locs = useSelector(state => state.locations)
    const chars = useSelector(state => state.characters)
    const epis = useSelector(state => state.episodes)

    console.log(locs, "locs redux")
    console.log(chars, "character redux")
    console.log(epis, "episode redux")

    useEffect(() => {
        fetchEpisodes()
        .then(episodes => dispatch(episodeActions.setEpisodes(episodes)))
        fetchLocations()
        .then(locations => dispatch(locationActions.setLocations(locations)))
        fetchCharacters()
        .then(chars => dispatch(characterActions.setCharacters(chars)))
      }, [])

    const fetchLocations = async function() {
        try {
          const request = await axios.get(LOC_TARGET)
          return request.data
        } catch (err) {
          console.log(err)
        }
      }
      
      const fetchCharacters = async function() {
        try {
          const request = await axios.get(CHAR_TARGET)
          return request.data
        } catch (err) {
          console.log(err)
        }
      }
    
      const fetchEpisodes = async function() {
        try {
          const request = await axios.get(EPI_TARGET)
          return request.data
        } catch (err) {
          console.log(err)
        }
      }

      const pushToAuth = () => {
          props.navigation.navigate('Auth')
      }

    return ( 
    <TouchableWithoutFeedback onPress={pushToAuth} style={styles.container}>
        <View style={styles.container}>
        
            <View style={styles.imageContainer}>
                <Image 
                source={require('../assets/portal.png')} 
                style={styles.image} />
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Welcome To The MortyVerse
                </Text>
            </View>

            <View style={styles.subTextContainer}>
                <Text style={styles.subText}>
                 The Rick and Morty Adventure App
                </Text>
            </View>

        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: Colors.dark.screen,
alignItems: 'center',
justifyContent: 'center',
},
title: {
fontFamily: 'cartoon', 
fontSize: 36, 
textAlign: 'center',
color: Colors.dark.text
},
subText: {
fontFamily:"adult-swim",
marginTop: Dimensions.get('window').height / 15,
color: Colors.dark.text
},
imageContainer: {
height: Dimensions.get('window').height / 1.9, 
width: Dimensions.get('window').width * 1.1,
borderRadius: 20,
// overflow: 'hidden',
backgroundColor: Colors.dark.screen
},
image: {
height: '100%', 
width: '100%', 
// resizeMode: 'contain'
},
titleContainer: {
position: 'absolute', 
top: Dimensions.get('window').height / 2.4, 
justifyContent: 'center', 
alignItems: 'center'
},
subTextContainer: {
borderBottomColor: 'white', 
borderBottomWidth: 1, 
justifyContent: 'center', 
alignItems: 'center'
}
})

export default Landing;