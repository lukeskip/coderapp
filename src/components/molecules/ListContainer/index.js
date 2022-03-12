import React ,{useContext,useEffect} from 'react'
import { View,Text } from 'react-native'
import ListItem from '../../atoms/ListItem/'
import ListContextProvider from '../../../contexts/ListContextProvider'
import ListContext from '../../../contexts/ListContext'
import generalStyles from '../../../styles/generalStyles'



export default function ListContainer(){
    const [items] = useContext(ListContextProvider);
    useEffect(()=>{
        console.log(items);
    },[]);
    return (
        <ListContext.Consumer>
            <View style={generalStyles.section}>

                {
                // items.map((item,index)=>{
                //         return (
                //             <ListItem label={item.label} key={index} id={item.id}></ListItem> 
                //         )
                //     })
                }
            </View>
        </ListContext.Consumer>
    )
    
    
}