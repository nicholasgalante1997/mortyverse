import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Button, Dimensions, FlatList} from 'react-native';

import { useHistory, useParams } from 'react-router-native';
import axios from 'axios';
import LocationImageData from '../constants/data/location';

import ResidentRow from '../components/ResidentRenderItem';
import Colors from '../constants/style/Colors';
import {Ionicons} from '@expo/vector-icons';
import IconHandler from '../components/Icon';

const LocationShow = (props) => {

    const [id, setId] = useState();
    const [location, setLocation] = useState();
    const [residents, setResidents] = useState();

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
        if (location){
            setResidents(location.residents);
        }
    }, [location])

    useEffect(() => {
        console.log({location});
        console.log({residents});
    }, [location, residents]);

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

    const renderItem = (itemData) => (
        <ResidentRow characterUrl={itemData.item} />
    )

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
            <View style={styles.subHeader}>
                <View style={styles.type}>
                    <IconHandler name={location.type} />
                    <Text style={styles.typeText}>Type: {location.type}</Text>
                </View>
                <View style={styles.dimension}>
                    
                </View>
            </View>
            <FlatList 
                keyExtractor={item => item.id}
                data={residents}
                renderItem={renderItem}
                style={{width: '100%'}}
            />
            </> :
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
    },
    subHeader: {
        marginTop: 16,
        width: Dimensions.get('window').width,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    typeText: {
        fontSize: 24,
        fontFamily: 'adult-swim',
        color: 'white',
        marginLeft: 24
    }
});

export default LocationShow;