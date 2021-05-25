import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import axios from 'axios'
import Colors from '../constants/style/Colors'

const ResidentRow = ({characterUrl}) => {

    const [character, setCharacter] = useState();

    useEffect(() => {
        fetchCharacter();
    }, []);

    useEffect(() => {
        console.log({character})
    }, [character])

    const fetchCharacter = async () => {
        const {data, status, statusText} = await axios.get(characterUrl);
        if (status >= 200 && status <= 299){
            setCharacter(data);
        } else {
            return { error: statusText };
        }
    }

    return ( 
        <View style={styles.row}> 
        {character ? 
        <>
          <View style={styles.imageContainer}>
            <Image source={{uri: character.image}} style={{width: '100%', height: '100%', resizeMode: 'contain'}} />
          </View>
          <View style={styles.resident}>
            <Text style={{color: 'white', fontFamily: 'adult-swim'}}>{character.name}</Text>
            <Text style={{color: 'white', fontFamily: 'adult-swim'}}>{character.status}</Text>
          </View>
        </>
        : <Text>Loading...</Text>}
        </View>
     );
}

const styles = StyleSheet.create({
    row: {
        minWidth: '90%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: Colors.dark.lightGray,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        borderRadius: 8,
        marginTop: 4
    },
    imageContainer: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft: 4,
        borderRadius: 12
    },
    resident: {
        marginLeft: 16,
        // alignItems: 'center'
    }
});
 
export default ResidentRow;