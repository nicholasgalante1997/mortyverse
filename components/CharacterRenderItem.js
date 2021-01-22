import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image, Dimensions} from 'react-native'
import Colors from '../constants/style/Colors'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const CharacterRenderItem = (props) => {

    const [itemData] = props;
    
    return ( 
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
     );
}
 
export default CharacterRenderItem;