import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "../components/screens/Welcome/Welcome";
import Greeting from "../components/screens/Welcome/Welcome";
const Stack = createNativeStackNavigator();

export default function MainNavigator (){
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen options={{ headerShown: false }}  name='Welcome' component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name='Greeting' component={Greeting} />
        </Stack.Navigator>
    )
}