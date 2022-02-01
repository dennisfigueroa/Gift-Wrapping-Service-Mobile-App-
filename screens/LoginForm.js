import React, {useState} from 'react';
import {View, StyleSheet, Image, useWindowDimensions} from 'react-native';
import CustomInput from '../components/CustomInput';
import Logo from '../assets/wrapped.png';
import CustomButton from '../components/CustomButton'; 
import { Auth } from 'aws-amplify';
import {useForm, Controller} from 'react-hook-form'; 

function LoginForm({navigation}) {
 
    const createPressed = () => {
        navigation.navigate('Register');
    }
    const onSignInPressed =  data => {
        //const response = await Auth.signIn(data.userName, data.password);
        console.log(data);
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('Reset');
        }

    const {
        control, 
        handleSubmit, 
        formState:{errors},
    } = useForm();

    console.log(errors)


    const {height} = useWindowDimensions();



    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo, { height: height * 0.3 }} resizeMode="contain" />
            
            <CustomInput
                name="username"
                placeholder="Username"
                control={control}
                rules={{required: 'Username is required' }}
            />


            <CustomInput
                name="password"
                placeholder="Password"
                secureTextEntry={true} 
                control={control}
                rules={{
                required: 'Password is required',
                minLength: {
                    value: 3,
                    message: 'Password should be minimum 3 characters long',
                },
            }}
                /> 
   

            <CustomButton  
            text="Login" 
            onPress={handleSubmit(onSignInPressed)}/>
            
            <CustomButton  
            text="Forgot Password" 
            onPress={onForgotPasswordPressed} 
            type={"TERTIARY"}/>
           
            <CustomButton  
            text="Sign in with Facebook" 
            bgColor="#e7eaf4"
            fgColor="#4765A9"
             />

            <CustomButton  
            text="Sign in with Google" 
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            />

            <CustomButton  
            text="Sign in with Apple" 
            bgColor="#e3e3e3"
            fgColor="#363636"
            />
            <CustomButton
            text="Don't have an account? Create one"
            type="TERTIARY"
            onPress={createPressed}
            />
            </View>
    );
}
const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
        backgroundColor: '#F9FBFC',
        flex:1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    logo: {
        width:'70%',
        maxWidth: 300,
        maxHeight:200,
       
    },

})


export default LoginForm