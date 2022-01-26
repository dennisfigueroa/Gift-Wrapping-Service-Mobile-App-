import React, {useState} from 'react';
import {SafeAreaView, View, TextInput, Text, StyleSheet} from 'react-native';

function LoginForm() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return (
    <SafeAreaView>
        <View style={styles.username}>
            <Text> 
                Username: 
                <TextInput 
                style={styles.input}
                onChangeText={(e) => setUserName(e.target.value)}
                placeholder="Username"
                value={userName}
                ></TextInput>
            </Text>

            <Text> 
                Password: 
                <TextInput 
                style={styles.input}
                onChangeText={(e) => setPassword(e.target.value)}
                placeholder="Password"
                value={password}
                ></TextInput>
            </Text>

            </View>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    username: {
        backgroundColor: "white",
        height: 50,

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
   
})


export default LoginForm