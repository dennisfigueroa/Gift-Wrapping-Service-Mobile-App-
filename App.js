import React from 'react'; 
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './routes/homeStack';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import UserHomeScreen from './screens/UserHomeScreen'; 

Amplify.configure({
  ...config,
  Analytics: { 
    disabled: true
  }
});


const App = () =>{
  return (
    <SafeAreaView style={styles.root}>
      <UserHomeScreen />
      {/* <Navigation /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }

}) 



export default App;