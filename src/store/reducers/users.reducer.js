import {users} from '../../constants/users'

const initialState = {
    users:users,
    selectedUsers: null
}
const usersReducer = (state = initialState,action)=>{
    return state
}

export default usersReducer;