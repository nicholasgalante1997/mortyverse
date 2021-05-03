import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Button, Dimensions} from 'react-native';
import { useHistory, useParams } from 'react-router-native';
import axios from 'axios';
import LocationImageData from '../constants/data/location';
import Colors from '../constants/style/Colors'
import {Ionicons} from '@expo/vector-icons';

const LocationShow = (props) => {

    const [id, setId] = useState();
    const [location, setLocation] = useState();

    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        if (params.id){
          setId(params.id);
        }    
    }, [params]);

    useEffect(() => {
        fetchLocationData();
    }, [id]);

    useEffect(() => {
        console.log({location});
    }, [location]);

    const fetchLocationData = async () => {
        try {
            const {data, status, statusText} = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
            if (status > 199 && status < 400){
               const asset = LocationImageData.filter(locationImage => locationImage.id === data.id )[0];
               setLocation({...data, ...asset}); 
            } else {
                throw new Error(statusText);
            }
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.screen}>
            {location ? 
            <>
            <View style={styles.imageContainer}>
                <Image source={{uri: location.image}} style={{height: '100%', width: '100%', resizeMode: 'cover'}} />
            </View>
            <Ionicons 
                name="ios-arrow-back-circle-outline" 
                size={44} 
                color="white" 
                style={{ zIndex: 10, position: 'absolute', top: 36, left: 16}}
                onPress={history.goBack}
            />
            <View style={styles.header}>
                <Text style={styles.headerText}>{location.name}</Text>
            </View>
            </>:
            <View style={styles.loadingScreen}>
                <Text style={{color: 'white'}}>
                    ...Loading
                </Text>
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.dark.darkGray,
        alignItems: 'center'
    },
    loadingScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        height: '20%',
        width: Dimensions.get('window').width,
        overflow: 'hidden'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: '80%',
        padding: 8
    },
    headerText: {
        color: 'white',
        fontFamily: 'adult-swim',
        fontSize: 44,
    }
});

export default LocationShow;