import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton'; 

function ResetPassword({ navigation }) {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState(''); 

    const submitPressed = () => {
        console.warn('Submitted');
    }

    const backToPressed = () => {
        console.warn('backTo');
    }


    return (
        <View style={styles.root}>
            
            <Text style={styles.title}>
                Reset your password
            </Text>
            
            <CustomInput 
            placeholder="Enter your confirmation code" 
            value={code}
            setValue={setCode}
            type="TERTIARY"/>

            <CustomInput 
            placeholder="Enter your new password" 
            type="TERTIARY"
            secureTextEntry={true}
            />

            <CustomButton
            text = "Send"
            onPress={submitPressed}
            />
            <CustomButton
             text = "Back to Sign in"
             onPress={backToPressed}
             type="TERTIARY"
            />
            
        </View>
    );
}
const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
        backgroundColor: '#F9FBFC',
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold'
    },

})

export default ResetPassword