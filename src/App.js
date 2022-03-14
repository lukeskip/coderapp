/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import ListContainer from './components/molecules/ListContainer/'
import Form from './components/molecules/Form/Form'
import ListContextProvider from './contexts/ListContextProvider'
import generalStyles from './styles/generalStyles'

 
export default function App () {
  
  return (

    <ListContextProvider>
      <View style={generalStyles.container}>
        <Form></Form>
        <ListContainer></ListContainer>
      </View>
    </ListContextProvider>
  );
};

