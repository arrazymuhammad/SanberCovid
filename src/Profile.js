import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import logo from '../assets/logo.png'

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.imageLogo}/>
                <Text style={styles.crafted}>Crafted From Scratch By</Text>
                <Text style={styles.name}>Ar-Razy Muhammad</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageLogo: {
        height : 200,
        width : 200, 
        marginBottom : 50
    },
    crafted : {
        fontSize : 16, 
        fontWeight : "bold"
    },
    name : {
        fontWeight : "bold", 
        fontSize : 24
    }
  });
  
