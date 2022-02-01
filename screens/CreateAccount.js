import React, {useState} from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton'; 
import {useForm} from 'react-hook-form';

function CreateAccount({navigation}) {
 
    const onRegisterPressed = () => {
        navigation.navigate('Confirm'); 
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate('Reset');
        }

        const {
            control,
            handleSubmit,
            formState:{errors},
        } = useForm(); 

    const {height} = useWindowDimensions();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.root}>
            <Text style={styles.title}>
                Create an account            
            </Text>

            <CustomInput
                placeholder="Username"
                value={userName}
                setValue={setUserName}
                control={control}
                rules={{
                    required: 'Username is required',
                }}
            />

            <CustomInput    
            placeholder="Email"
            value={email} 
            setValue={setEmail}
            control={control}
            />

            <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry={true} 
            control={control}
            rules={{
                required: 'Password is required',
                minLength:{
                    value: 3,
                    message:'Password should be minimum 3 characters long',
                },
            }}
            />

            <CustomInput 
            placeholder="Confirm Password" 
            value={confirmedPassword} 
            setValue={setConfirmedPassword} 
            control={control}
            secureTextEntry={true} />

            <CustomButton  
            text="Register" 
            onPress={onRegisterPressed}/>
            
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
    title: {
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold'
    },
})


export default CreateAccount