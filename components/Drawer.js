import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {useLocation, useHistory} from 'react-router-native';
import Modal from 'react-native-modal';
import Colors from '../constants/style/Colors';

const Drawer = ({visible, toggleVisibility}) => {

  const history = useHistory();
  const location = useLocation();

  console.log({history, location});

    return (
        <Modal 
        isVisible={visible}
        onBackdropPress={toggleVisibility}
        onSwipeComplete={toggleVisibility}
        animationIn="slideInLeft" // Load in drawer from the left
        animationOut="slideOutLeft" // When discarding the drawer
        swipeDirection="left" // Discard the drawer with swipe to left
        useNativeDriver // Faster animation
        style={styles.modal}
        >
          <View style={styles.sideMenu}>
            <View style={styles.drawerHeader}> 
              <Text style={styles.headerText}>
                Rick and Morty
              </Text>
              <Text style={styles.subText}>
                Choose Your Own Adventure
              </Text>
            </View>
            <View style={styles.router}>
              <TouchableOpacity style={styles.tab}>
                <Text style={styles.tabText}>Adventures</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={location.pathname === '/glossary' ? styles.activeTab : styles.tabText}>Glossary</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        width: Dimensions.get('window').width * 0.75
    },
    sideMenu: {
      flex: 1,
      height: '100%',
      width: '80%',
      backgroundColor: 'white',
    },
    drawerHeader: {
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8
    },
    headerText: {
      fontSize: 32,
      fontFamily: 'cartoon',
      color: Colors.dark.darkGray
    },
    subText: {
      fontFamily: 'scribble',
      fontSize: 20,
      color: Colors.dark.veryDarkGray
    },
    router: {
      justifyContent: 'center',
      // alignItems: 'center',
      marginTop: 24,
      marginLeft: 16,
    },
    tabText: {
      fontSize: 24,
      fontFamily: 'shrill',
    },
    tab: {
      marginTop: 12
    },
    activeTab: {
      fontSize: 24,
      fontFamily: 'shrill',
      color: Colors.dark.green
    }
})

export default Drawer;