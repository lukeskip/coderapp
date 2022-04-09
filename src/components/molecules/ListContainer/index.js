import React ,{useEffect} from 'react'
import {useSelector,connect,useDispatch} from 'react-redux';
import { View,Text } from 'react-native'
import ListItem from '../../atoms/ListItem/'
import generalStyles from '../../../styles/generalStyles'



export default function ListContainer(){
    const dispatch  = useDispatch(); 
    const items     = useSelector(state => state.items);
    
    return (
        
            <View style={[generalStyles.section]}>

                {
                    items.items.map((item,index)=>{
                        return (
                            <ListItem style={generalStyles.listItem} label={item.label} checked={item.checked} key={index} id={item.id}></ListItem> 
                        )
                    })
                }
            </View>
    
    )
    
    
}