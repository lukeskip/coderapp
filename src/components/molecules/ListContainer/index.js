import React ,{useContext,useEffect} from 'react'
import { View,Text } from 'react-native'
import ListItem from '../../atoms/ListItem/'
import ListContext from '../../../contexts/ListContext'
import generalStyles from '../../../styles/generalStyles'



export default function ListContainer(){
    const {items} = useContext(ListContext);
    useEffect(()=>{
        console.log(items);
    },[]);
    return (
        
            <View style={[generalStyles.section]}>

                {
                    items.map((item,index)=>{
                        return (
                            <ListItem style={generalStyles.listItem} label={item.label} checked={item.checked} key={index} id={item.id}></ListItem> 
                        )
                    })
                }
            </View>
    
    )
    
    
}