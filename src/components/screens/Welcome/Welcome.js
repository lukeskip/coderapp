import React , {useContext} from 'react';
import {
  Text,
  View,
} from 'react-native';
import {useSelector,connect,useDispatch} from 'react-redux';
import ListContainer from '../../molecules/ListContainer/'
import Form from '../../molecules/Form/Form'
import Greeting from '../../screens/Greeting/Greeting'
import generalStyles  from "../../../styles/generalStyles";
import ListContext from '../../../contexts/ListContext'


export default function Welcome({navigation}){
    
    return(
        <View style={generalStyles.container}>
           
            <Text style={generalStyles.header1}>¡Bienvenido!, estas son tus tareas</Text>
            <Form></Form>
            <ListContainer></ListContainer>
        
            
        </View>
    )
}