import React from 'react';
import { ImageBackground, StyleSheet, View, Button} from 'react-native';


function WelcomeScreen({navigation}) {
    
    const loginHandler = () => {
    
        navigation.navigate('Login');
    }

    const registerHandler = () => {
        navigation.navigate('Register')
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
                onPress={registerHandler}
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

    },
   
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})

export default WelcomeScreen;