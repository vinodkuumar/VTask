import {EMAIL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL,
        LOGIN_USER,
        USERS_CREATE,
        USERS_SAVE_SUCCESS,
        REMOVE_ITEM} from '../actions/types';
import users from '../reducers/usersData.json';


const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    users: users,
    
};

export default (state = INITIAL_STATE,action) => {
   // console.log(action)
    switch(action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload}

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload}

        case LOGIN_USER:
            return {...state, loading: true,error: ''}

        case LOGIN_USER_SUCCESS:
            return {...state,
                 user: action.payload,
                 ...INITIAL_STATE, user: action.payload}

        case LOGIN_USER_FAIL:
            return{ ...state, error:'Authentication failed', loading: false}

        case USERS_CREATE:
            return INITIAL_STATE

        case USERS_SAVE_SUCCESS:
            return INITIAL_STATE

        case REMOVE_ITEM: 
        const updatedUsers = state.users.filter(item => item.id !== action.payload)
        console.log(updatedUsers)
                return{
                    ...state,   
                    users: updatedUsers
                }
        default:
            return {...state};
    }
}

