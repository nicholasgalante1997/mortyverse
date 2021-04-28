import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import Colors from '../constants/style/Colors'

// Retrieve Locally Cached User
import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux State Imports
import {useDispatch, useSelector} from 'react-redux'
import * as locationActions from '../store/actions/locations'
import * as episodeActions from '../store/actions/episodes'
import * as characterActions from '../store/actions/characters'
import * as userActions from '../store/actions/user'

//React-Router-Native Imports
import { useHistory } from 'react-router-native';

//Moment
import moment from 'moment';
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
    const user = useSelector(state => state.user)
    let history = useHistory();

    useEffect(() => {
      getStoredUserData()
    }, [])

    const getStoredUserData = async () => {
      try {
        const value = await AsyncStorage.getItem('@user')
        if(value !== null) {
          const readable = JSON.parse(value)
          if (timestampValidationOnToken(value)){
            dispatch(userActions.handleSignIn(readable))
          } else {
            resetTokenIfExpired('@user');
          } 
        } else {
          console.log("no stored token")
        }
      } catch(e) {
        console.log(e)
      }
    }

    const timestampValidationOnToken = ({timestamp}) =>  {
      const adjustedTimestamp = moment(timestamp).add(7, 'd');
      if (moment().isAfter(adjustedTimestamp)) {
        return false;
      }
      return true;
    }

    const resetTokenIfExpired = async (key) => {
      try {
        await AsyncStorage.removeItem(key);
      } catch(e) {
        console.log(e.message);
      }
    }

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
          // Initial Empty Array for Loading of Fetched Results
          let arr = []
          // Axios http request to R&M Servers
          const request = await axios.get(LOC_TARGET)
          // Variable Assignment ==> For Loop
          const lastPage = request.data.info.pages  
          let next = request.data.info.next

          // Set arr to initial http request's results
          arr = request.data.results

          // Repeat GET Request until final page
          for (let i=2; i <= lastPage; i++){
            // Axios get request next page
            const subsequent = await axios.get(next)
            // Spread new results into array
            arr = [...arr, ...subsequent.data.results]
            // Set next page to new next page
            next = subsequent.data.info.next
          }

          return arr 

        } catch (err) {
          console.log(err)
        }
      }
      
      const fetchCharacters = async function() {
        try {
          let arr = []
          const request = await axios.get(CHAR_TARGET)
          const lastPage = request.data.info.pages  
          let next = request.data.info.next
          arr = request.data.results
          for (let i=2; i <= lastPage; i++){
            const subsequent = await axios.get(next)
            arr = [...arr, ...subsequent.data.results]
            next = subsequent.data.info.next
          }
          return arr 
        } catch (err) {
          console.log(err)
        }
      }
    
      const fetchEpisodes = async function() {
        try {
          let arr = []
          const request = await axios.get(EPI_TARGET)
          const lastPage = request.data.info.pages  
          let next = request.data.info.next
          arr = request.data.results
          for (let i=2; i <= lastPage; i++){
            const subsequent = await axios.get(next)
            arr = [...arr, ...subsequent.data.results]
            next = subsequent.data.info.next
          }
          return arr
        } catch (err) {
          console.log(err)
        }
      }

      const pushToAuth = () => {
          // props.navigation.navigate('Auth')
          history.push('/auth');
      }

      const pushToMainContent = () => {
        // props.navigation.navigate("Content")
        history.push('/glossary')
      }

    return ( 
    <TouchableWithoutFeedback onPress={user.isAuthenticated ? pushToMainContent : pushToAuth} style={styles.container}>
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