import React,{useState,useContext} from 'react'
import {View,TextInput,Button} from 'react-native'
import ListContext from '../../../contexts/ListContext'
import generalStyles from '../../../styles/generalStyles'

export default function Form (){
    
    const {addElement,handleNewItem,newItem} = useContext(ListContext);

    return (
        <View>
            <TextInput onChangeText={handleNewItem} style={generalStyles.input}></TextInput>
            <Button onPress={()=>addElement(newItem)} title="Agregar Elemento"/>
        </View>
    )
}