import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './main';

export default function AppNavigation (){
    return(
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}