import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Button, TextInput } from 'react-native';


function WelcomeScreen() {

    const loginHandler = () => {
        const [userName, setUserName] = useState('');
        console.log("This works.'")
    }

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/gift.jpeg")}>    
            <View
                style={styles.loginButton}
            >
                <Button 
                title="LOGIN" 
                color ="#000000"
                onPress={loginHandler}
                />
            </View>
            <View style={styles.registerButton}>
                <Button title="REGISTER"
                color ="#000000"
                 />
            </View>
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
        alignItems: 'center',
        justifyContent: 'center',

    },
    registerButton: {
        width: '100%',
        height:70,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default WelcomeScreen;