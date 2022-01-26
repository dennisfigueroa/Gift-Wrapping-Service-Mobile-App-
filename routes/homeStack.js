import { createStackNavigator } from 'react-navigation-stack'; 
import {createAppContainer} from 'react-navigation'; 
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginForm from '../screens/LoginForm';

const screens = {
    Welcome: {
        screen: WelcomeScreen
    },
    Login: {
        screen: LoginForm
    }
}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack); 
