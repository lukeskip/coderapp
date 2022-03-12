import React,{useState} from 'react'
import {View,TextInput,Button} from 'react-native'
import generalStyles from '../../../styles/generalStyles'

export default function Form ({add}){
    const [newItem,setNewItem ] = useState('');

    const handleNewItem  = text => setNewItem(text);
    
    function pressAction(){
        add(newItem);
    }

    return (
        <View>
            <TextInput onChangeText={handleNewItem} style={generalStyles.input}></TextInput>
            <Button onPress={pressAction} title="Agregar Elento"/>
        </View>
    )
}