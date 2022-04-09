import {itemsInit} from '../../constants/items'

const initialState = {
    items:itemsInit,
    newItem: null
}
const itemsReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'ADD_ITEM':
              return  [...state.items, {id: state.items.length + 1, label: action.payload, checked: false}];

        case 'CHECK_ELEMENT':
           
       
            let item = state.items.find(function (found) {
                return found.id === action.payload;
            });

            item.checked = true;

            return {...state}
        case 'DELETE_ELEMENT':
            state.items = state.items.filter(function (item) {
                return item.id !== action.payload;
            });
            
            
            return {...state}
            
        default:
            return state;
    }
    return state
}

export default itemsReducer;