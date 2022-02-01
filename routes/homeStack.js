import { createStackNavigator } from 'react-navigation-stack'; 
import {createAppContainer} from 'react-navigation'; 
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginForm from '../screens/LoginForm';
import ResetPassword from '../screens/ResetPassword';
import CreateAccount from '../screens/CreateAccount';
import ConfirmEmail from '../screens/ConfirmEmail';
import ConfirmNewPassword from '../screens/ConfirmNewPassword';

const screens = {
    Welcome: {
        screen: WelcomeScreen
    },
    Login: {
        screen: LoginForm
    },
    Reset: {
        screen: ResetPassword
    },
    Register: {
        screen: CreateAccount
    },
    Confirm: {
        screen: ConfirmEmail
    },
    ConfirmNewPassword: {
        screen:ConfirmNewPassword
    },

}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack); 
