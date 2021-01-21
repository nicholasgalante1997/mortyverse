import React from 'react'
import {View, Image} from 'react-native'

export default function CustomTabIcon (props){
    return (
        <View style={{backgroundColor: props.color, height: 40, width: 40, borderRadius: 20, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
            <Image 
                source={{uri: 'https://www.nicepng.com/png/detail/4-46920_rick-and-morty-szechuan-sauce-png-clip-art.png'}} 
                style={{height: '100%', width: '100%', resizeMode: 'cover'}} 
            />
        </View>
    )
}