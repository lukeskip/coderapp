import React, {useContext} from 'react';
import generalStyles from "../../../styles/generalStyles";
import ListContext from '../../../contexts/ListContext'

import {
    Text,
    View,
    Button
} from 'react-native';

export default function Greeting(){
    const {resetList} = useContext(ListContext);
    return(
        <View>
            <Text style={generalStyles.header1}>Felicidades Terminaste todas las tareas!</Text>
            <Button onPress={() => resetList()} title="Reiniciar" />
        </View>
    )
}