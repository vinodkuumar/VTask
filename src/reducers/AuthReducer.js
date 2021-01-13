import {EMAIL_CHANGED,
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL,
        LOGIN_USER,
        USERS_CREATE,
        USERS_SAVE_SUCCESS,
        REMOVE_ITEM,
        LOGOUT_REQUEST,
        LOGOUT_SUCCESS,
        LOGOUT_FAILURE,
        VERIFY_REQUEST,
        VERIFY_SUCCESS} from '../actions/types';
import users from '../reducers/usersData.json';


const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    isUserConnected: false,
    isLoggingIn: false,
    isLoggingOut: false,
    logoutError: false,
    isVerifying: false,
    users: users,
    filteredUsers: []
    
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
        
        case LOGOUT_REQUEST:
                return {
                  ...state,
                  isLoggingOut: true,
                  logoutError: false
                };
        
        case LOGOUT_SUCCESS:
            return{
                ...state,
                isLoggingOut: false,

            }

        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                logoutError: true
                };
        case VERIFY_REQUEST:
            return {
              ...state,
              isVerifying: true,
              verifyingError: false
              
         };
        case VERIFY_SUCCESS:
            return {
                ...state,
                isVerifying: false
        };

        case REMOVE_ITEM: 
                // const existingIndex = state.filteredUsers.findIndex(user => user.id === action.payload)
                // if(existingIndex >= 0){
                //     const updatedUsers = [...state.filteredUsers]
                //     updatedUsers.splice(existingIndex,1)
                //     console.log(updatedUsers)
                //     return {...state, filteredUsers: updatedUsers}
                // }
                // else{
                //     // const updatedUsers = state.users.filter(item => item.id !== action.payload)
                //     // console.log(updatedUsers)
                //     // return{
                //     //     ...state,   
                //     //     users: updatedUsers
                //     // }
                //     const user = state.users.find(user => user.id === action.payload)
                //     return {...state, filteredUsers: state.filteredUsers.concat(user)}
                // }
                const updatedUsers = state.users.filter(item => item.id !== action.payload)
                    console.log("updatedusers are", updatedUsers)
                    return{
                        ...state,   
                        filteredUsers: updatedUsers
                        
                    }
       
              
        default:
            return state
    }
}

