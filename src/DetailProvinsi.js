import React, { Component } from 'react'
import { Text, View, StyleSheet,Image, TouchableOpacity, FlatList } from 'react-native'
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
import logo from '../assets/logo.png'
export default class DetailProvinsi extends Component {
    constructor(props){
        super(props)
        let date = new Date;
        let tanggal = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
        this.state = {
            indonesia: {},
            list_provinsi : {},
            isLoading: true,
            isError: false,
            tanggal
        }
    }
    render() {
        const {data} = this.props.route.params
        let total = data.Kasus_Meni+data.Kasus_Posi+data.Kasus_Semb
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logo} style={styles.headerImageLogo}/>
                    <Text style={styles.headerTitle}> Hai, {'\n'} <Text style={styles.titleName}>Ar-Razy Muhammad</Text></Text>
                </View>
                <View style={styles.pageTitleContainer}>
                    <Text style={styles.pageTitle}>STATISTIK KASUS  {'\n'}COVID-19 DI {data.Provinsi}  {'\n'}{this.state.tanggal} </Text>
                </View>
                <View style={styles.pageDetailContainer} >
                    <View style={styles.pageDetailItem}>
                        <Text style={styles.pageDetailItemLabel}>Total Kasus</Text>
                        <Text style={styles.pageDetailItemCount}>{total}</Text>
                    </View>
                    <View style={styles.pageDetailItem}>
                        <Text style={styles.pageDetailItemLabel}>Kasus Aktif</Text>
                        <Text style={styles.pageDetailItemCount}>{data.Kasus_Posi}</Text>
                    </View>
                </View>
                <View style={styles.pageDetailContainer} >
                    <View style={styles.pageDetailItem}>
                        <Text style={styles.pageDetailItemLabel}>Pasien Sembuh</Text>
                        <Text style={styles.pageDetailItemCount}>{data.Kasus_Semb}</Text>
                    </View>
                    <View style={styles.pageDetailItem}>
                        <Text style={styles.pageDetailItemLabel}>Pasien Meninggal</Text>
                        <Text style={styles.pageDetailItemCount}>{data.Kasus_Meni}</Text>
                    </View>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header : {
        height : 100,
        flexDirection : "row",
        justifyContent : "flex-start",
        borderBottomWidth : 1,
        borderBottomColor : "#0ad",
    },
    headerImageLogo : {
        height : 80,
        width : 80,
        padding : 10,
        margin : 10
    },
    headerTitle : {
        alignSelf : "center", 
        fontWeight : "bold",
        fontSize : 18,
        color : "#0ad"
    },
    titleName : {
        fontSize : 24,
    },
    pageTitle:{
        fontSize : 20,
        fontWeight : "bold", 
        textAlign : "center",
        lineHeight : 20,
        marginTop : 20
        
    },
    pageTitleContainer : {
        justifyContent : "center",
        alignItems : "center"
    },
    pageDetailContainer : {
        marginTop : 20,
        width : "90%",
        alignSelf : "center",
        height : 100,
        flexDirection : "row",
        justifyContent : "space-around"
    },
    pageDetailItem : {
        width : "45%",
        backgroundColor : "#0aa",
        height : "100%", 
        borderRadius : 10,
    }, 
    pageDetailItemLabel : {
        fontSize : 20,
        fontWeight : "bold", 
        color : "white", 
        padding : 10
    },
    pageDetailItemCount : {
        color : "white", 
        alignSelf : "flex-end",
        paddingHorizontal : 10, 
        fontWeight : "bold", 
        fontSize : 40
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
        alignItems : "center"
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
