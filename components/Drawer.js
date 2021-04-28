import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';

const Drawer = ({visible, toggleVisibility}) => {
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
    }
})

export default Drawer;