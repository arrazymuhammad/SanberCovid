import React, { Component } from 'react'
import { Text, View , StyleSheet,TouchableOpacity} from 'react-native'

export default class ListItemProvinsi extends Component {
    constructor(props){
        super(props)
        this.handlePilih = this.handlePilih.bind(this)
      }
    handlePilih(){
        const item = this.props.data.item.attributes
        this.props.onPilih(item)
    }
    render() {
        const item = this.props.data.item.attributes
        return (
            <TouchableOpacity style={styles.provinsiItem} onPress={this.handlePilih}>
                <Text style={styles.provinsiName}>{item.Provinsi}</Text>
                <Text style={styles.provinsiTotal}>{item.Kasus_Posi}</Text> 
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    listProvinsiContainer : {
        padding : 10,
        marginTop : 20
    },
    listProvinsiTitle : {
        textAlign : "center",
        fontSize : 18, 
        fontWeight : "bold", 
        borderBottomColor : "#abb", 
        borderBottomWidth : 2, 
        paddingBottom : 5
    },
    provinsiItem : {
        height : 80,
        width : "100%", 
        backgroundColor : "#eee",
        justifyContent : "center", 
        alignItems : "center",
        marginBottom : 5
    }, 
    provinsiName : {
        fontSize : 24,
        fontWeight : "bold", 

    },
    provinsiTotal : {
        fontWeight : "bold", 
        fontSize : 18
    }

  });
