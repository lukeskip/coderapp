import React, {useContext} from 'react'
import { View,StyleSheet,Text,Button } from 'react-native'
import ListItemStyles from './listItemStyles'
import generalStyles from '../../../styles/generalStyles'
import ListContext from '../../../contexts/ListContext'


export default function ListItem ({id,label,checked}){

    const {deleteElement,checkElement} = useContext(ListContext);

    return (
        <View style={generalStyles.containerFlex}>
           <Text onPress={()=>checkElement(id)} style={[generalStyles.titleText,generalStyles.flexItem]}>
                {checked === true ? "x" : null} {label}
           </Text>
           <View style={generalStyles.containerFlex}>
                <View>
                    <Button onPress={()=>deleteElement(id)} title="X"/>
                </View>
                <View>
                    <Button color="#841584" onPress={()=>checkElement(id)} title="C"/>
                </View>
           </View> 
           
        </View>
    );
};