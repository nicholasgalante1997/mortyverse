import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'

export default function CustomTabIcon (props){
    return (
        <View style={{backgroundColor: props.color, height: 40, width: 40, borderRadius: 8, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{backgroundColor: 'white', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}} onPress={props.onPress}>
                 <Image 
                source={{uri: props.image}} 
                style={{height: '100%', width: '100%', resizeMode: 'cover'}} 
                />
            </TouchableOpacity>
        </View>
    )
}