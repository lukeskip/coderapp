import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import ListItemStyles from './listItemStyles';
import generalStyles from '../../../styles/generalStyles';
import {checkElement,deleteElement} from '../../../store/actions/index';
import {useSelector,useDispatch} from 'react-redux';


export default function ListItem({id, label, checked}) {
  
  const dispatch = useDispatch();
 

  return (
    <View style={generalStyles.containerFlex}>
      <Text
        onPress={() => dispatch(checkElement(id))}
        style={[
          generalStyles.titleText,
          generalStyles.flexItem,
          checked ? generalStyles.titleTextChecked : null,
        ]}>
        {label}
      </Text>
      <View style={generalStyles.containerFlex}>
        <View>
          <Button 
            onPress={() => dispatch(deleteElement(id))} 
            title="X" 

          />
        </View>
      </View>
    </View>
  );
}
