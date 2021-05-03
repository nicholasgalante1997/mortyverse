import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/style/Colors'

const Nav = (props) => {
    const { left, right, title, subtitle } = props;

    return (
        <View style={styles.nav}>
            <View style={styles.left}>
                {left()}
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.right}>
                {left()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '10%',
        width: '100%',
        backgroundColor: Colors.dark.darkGray
    },
    left: {
        marginTop: 24,
        width: '10%'
    },
    center: {
        marginTop: 24,
        flexDirection: 'column',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    right: {
        marginTop: 24,
        width: '10%'
    },
    title: {
        color: 'white',
        fontFamily: 'cartoon',
        fontSize: 24
    },
    subtitle: {
        color: 'white',
        fontFamily: 'adult-swim',
        fontSize: 12,
        textAlign: 'center'
    }
})

export default Nav;