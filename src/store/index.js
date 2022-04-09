import {createStore, combineReducers} from 'redux';
import usersReducer from './reducers/users.reducer'
import itemsReducer from './reducers/items.reducer'

const rootReducer = combineReducers ({
    users:usersReducer,
    items:itemsReducer,
});


export default createStore(rootReducer);