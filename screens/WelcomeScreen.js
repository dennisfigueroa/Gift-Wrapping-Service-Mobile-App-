import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen() {
    return (
        <ImageBackground 
        style={styles.background}
        source={require("../assets/gift.jpeg")}>
        <View 
        style={styles.loginButton}
        ></View>
        <View 
        style={styles.registerButton}
        ></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:'flex-end',
    },
    loginButton: {
        width: '100%',
        height:70,
        backgroundColor: "#fc5c65",

    },
    registerButton: {
        width: '100%',
        height:70,
        backgroundColor: "white",

    }
})

export default WelcomeScreen;