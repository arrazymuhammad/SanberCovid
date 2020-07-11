import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import logo from '../assets/logo.png'

export default class LoginPage extends Component {
    state = {
        name : "",
        password : "",
        isError : false
    }

    loginHandler = () => {
        const {name, password} = this.state

        if(password == '12345') {
            this.setState({isError : false})
            this.props.navigation.navigate('Main',{name})
        } else {
            this.setState({isError : true})
        }

    }

    render() {
        let state = this.state
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.imageLogo}/>
                <View style={styles.loginContainer}>
                    <View style={styles.loginInputContainer}>
                        <Text style={styles.loginLabel}>Name</Text>
                        <TextInput 
                            style={styles.loginInput} 
                            onChangeText={name => this.setState({ name })
                            }/>
                    </View>
                    <View style={styles.loginInputContainer}>
                        <Text style={styles.loginLabel}>Password</Text>
                        <TextInput 
                            style={styles.loginInput} value={state.password} 
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry={true}
                            />
                    </View>
                    <Text style={this.state.isError ? styles.errorText : styles.hiddenErrorText}>Password Salah</Text>

                    <TouchableOpacity style={styles.loginButtonContainer} onPress={() => this.loginHandler()}>
                        <Text style={styles.loginButtonText}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
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
    loginContainer : {
        width: "80%",
    },
    loginInputContainer:{
        marginVertical:15
    },
    loginLabel :{
        marginVertical:10,
        marginHorizontal:5,
        color:"#089",
        fontWeight:"bold"
    },
    loginInput: {
        borderColor: "#089",
        borderWidth:2,
        borderRadius:10,
        padding : 10
    },
    loginButtonContainer : {
        width: "40%",
        backgroundColor : "#089",
        padding : 10,
        alignSelf : "flex-end",
        marginTop : 20,
        borderRadius : 20,
        justifyContent : "center",
        alignItems : "center"
    },
    loginButtonText : { 
        color : "white",
        fontWeight : "bold",
        fontSize : 18
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 16,
    },
    hiddenErrorText: {
        color: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    }
  });
  
