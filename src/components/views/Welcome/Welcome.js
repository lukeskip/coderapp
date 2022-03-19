import React , {useContext} from 'react';
import {
  Text,
  View,
} from 'react-native';
import ListContainer from '../../molecules/ListContainer/'
import Form from '../../molecules/Form/Form'
import Greeting from '../../views/Greeting/Greeting'
import generalStyles  from "../../../styles/generalStyles";
import ListContext from '../../../contexts/ListContext'


export default function Welcome(){
    const {allDone} = useContext(ListContext);
    return(
        <View style={generalStyles.container}>
            {
            !allDone ?
            <>
                <Text style={generalStyles.header1}>¡Bienvenido!, estas son tus tareas</Text>
                <Form></Form>
                <ListContainer></ListContainer>
            </> :
            <Greeting></Greeting>
            }
        </View>
    )
}