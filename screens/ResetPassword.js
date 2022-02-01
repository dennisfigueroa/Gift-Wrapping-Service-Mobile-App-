import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton'; 
import {useForm} from 'react-hook-form';

function ResetPassword({ navigation }) {

    const submitPressed = () => {
        navigation.navigate('ConfirmNewPassword')
    }

    
    const backToPressed = () => {
        console.warn('backTo');
    }

    const {
        control,
        handleSubmit,
        formState:{errors},
    } = useForm(); 

    return (
        <View style={styles.root}>
            
            <Text style={styles.title}>
                Reset your password
            </Text>
            
            <CustomInput 
            placeholder="Username" 
            type="TERTIARY"
            control={control}
            rules={{required: 'Username is required'}}
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