import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMAIL_CHANGED, 
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL,
        LOGIN_USER,
        USERS_CREATE,
        USERS_FETCH_SUCCESS,
        USERS_SAVE_SUCCESS,
        REMOVE_ITEM} from './types';


export const emailChanged = (text) => {
    return{
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return{
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email, password}) => {
    return(dispatch) => {
        dispatch({type:LOGIN_USER})
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => loginUserSuccess(dispatch,user))
        .catch((error) => {
            console.log(error)
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch(() => loginUserFail(dispatch))
        })
    }
}

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.main();
}

export const usersCreate = ({email,password}) => {
    console.log(email,password);
    const {currentUser} = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users`)
        .push({email,password})
        .then(() => {
            dispatch({
                type: USERS_CREATE
            })
        })
    }
}

export const usersFetch = () => {
    const {currentUser} = firebase.auth()

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
        .on('value',snapshot => {
            dispatch({
                type: USERS_FETCH_SUCCESS,
                payload: snapshot.val()
            })
        })
    }
}

export const usersSave = ({userName}) => {
    const {currentUser} = firebase.auth()

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
        .set({userName})
        .then(() => {
            dispatch({
                type: USERS_SAVE_SUCCESS
            })
        })
    }
}

export const removeItem = id => ({
    type: REMOVE_ITEM,
    payload: id
})