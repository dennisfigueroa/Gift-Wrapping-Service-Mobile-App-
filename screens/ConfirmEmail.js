import React, {useState} from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton'; 

function CreateAccount({navigation}) {
 
    const onConfirmPress = () => {
        console.warn('Confirmed'); 
    }

    const onResendPress = () => {
        console.warn('Resent'); 
        }

    const [userName, setUserName] = useState('');
    const [code, setCode] = useState('');

    return (
        <View style={styles.root}>
            <Text style={styles.title}>
                Confirm your email           
            </Text>
            
            <CustomInput
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode}
            />      

            <CustomButton  
            text="Confirm" 
            onPress={onConfirmPress}
           
            />
            
            <CustomButton  
            text="Resend code" 
            onPress={onResendPress} 
            type="SECONDARY"/>

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