import React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import CustomTabIcon from './CustomTabIcon';
import * as Animatable from 'react-native-animatable';

const galaxy = require('../assets/universe.svg');
const sleep = require('../assets/night.svg');
const unknown = require('../assets/file.svg');

const iconSet = {
    'Space station': () => <MaterialCommunityIcons name="space-station" size={44} color="white" />,
    'Planet': () => <Ionicons name="planet-outline" size={44} color="white" />,
    'Microverse': () => <CustomTabIcon image={galaxy} />,
    'TV': () => <Ionicons name="tv-sharp" size={44} color="white" />,
    'Dream': () => <CustomTabIcon image={sleep} />,
    'unknown': () => <CustomTabIcon image={unknown} />
}

const handler = (name) => {
    return iconSet[name]() || iconSet['unknown']();
} 

const Icon = ({name}) => {
    return ( 
        <>
        <Animatable.View iterationDelay={700} animation="rotate" iterationCount="infinite" useNativeDriver direction="normal">
             {handler(name)}
        </Animatable.View>
        </>
     );
}
 
export default Icon;