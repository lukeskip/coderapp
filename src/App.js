/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import Greeting from './components/screens/Greeting/Greeting'
import ListContextProvider from './contexts/ListContextProvider'
import Welcome from './components/screens/Welcome/Welcome'
import generalStyles from './styles/generalStyles';
import AppNavigation from './navigation/index'

 
export default function App () {
  
  
  return (
    <ListContextProvider>
      <AppNavigation />
    </ListContextProvider>
  );
};

