import React from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'
import CustomTab from './CustomTab'

const CustomTabHeader = (props) => {

    const {tabs} = props;

    return ( 
        <View style={styles.bar}>
            {tabs.map((tab, index) => 
            <CustomTab 
                key={index}
                text={tab.name} 
                onPress={tab.onPress} 
                isActive={tab.isActive} 
            />)}
        </View>
     );
}

const styles = StyleSheet.create({
    bar: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.05,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})
 
export default CustomTabHeader;