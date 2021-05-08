import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios'

const ResidentRow = ({characterUrl}) => {

    const [character, setCharacter] = useState();

    useEffect(() => {
        fetchCharacter();
    }, []);

    // useEffect(() => {
    //     console.log(character);
    // }, [character])

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

        </View>
     );
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'white'
    }
});
 
export default ResidentRow;