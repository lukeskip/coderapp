import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {View,TextInput,Button} from 'react-native'
import ListContext from '../../../contexts/ListContext'
import generalStyles from '../../../styles/generalStyles'
import {addItem} from '../../../store/actions/index'

export default function Form (){
    const dispatch = useDispatch();
    const handleNewItem = text => setNewItem(text);
    const [newItem, setNewItem] = useState('');
    return (
        <View>
            <TextInput 
                onChangeText={handleNewItem} 
                style={generalStyles.input}>

            </TextInput>
            <Button 
                onPress={()=>dispatch(addItem(newItem))} 
                title="Agregar Elemento"/>
        </View>
    )
}