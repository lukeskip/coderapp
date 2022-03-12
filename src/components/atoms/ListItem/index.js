import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import ListItemStyles from './listItemStyles'
export default function ListItem ({id,label}){
    return (
        <View>
           <Text onPress={()=>{console.log(id)}} styles={ListItemStyles.item}>
                {label}
           </Text> 
        </View>
    );
};