/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import Greeting from './components/views/Greeting/Greeting'
import ListContextProvider from './contexts/ListContextProvider'
import Welcome from './components/views/Welcome/Welcome'
import generalStyles from './styles/generalStyles'

 
export default function App () {
  
  
  return (

    <ListContextProvider>
      <Welcome></Welcome>
    </ListContextProvider>
  );
};

