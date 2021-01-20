import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMAIL_CHANGED, 
        PASSWORD_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL,
        LOGIN_USER,
        REMOVE_ITEM,
        }from './types';


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

export const removeItem = id => ({
    type: REMOVE_ITEM,
    payload: id
})

// export const logoutUser = () => dispatch => {
//     dispatch(requestLogout())
//     firebase.auth().signOut().then(() => {
//         dispatch(receiveLogout());
//     })
//     .catch(error => {
//         dispatch(logoutError());
//     })
// }


// const receiveLogin = user => {
//     return {
//       type: LOGIN_SUCCESS,
      
//     };
//   };


// const requestLogout = () => {
//     return{
//         type: LOGOUT_REQUEST
//     }  
// }

// const receiveLogout = () => {
//     return{
//         type: LOGOUT_SUCCESS
        
//     }
    
// }

// const logoutError = () => {
//     return{
//         type: LOGOUT_FAILURE
//     }
// }

// const verifyRequest = () => {
//     return{
//         type: VERIFY_REQUEST
//     }
// }

// const verifySuccess = () => {
//     return{
//         type: VERIFY_SUCCESS
//     }
// }

// export const verfiyAuth = () => dispatch => {
//     const firebaseConfig = {
//         apiKey: "AIzaSyAc8fstZ8UFELf8zsfQehEb5NogRtXtXB8",
//         authDomain: "vtask-d65d3.firebaseapp.com",
//         projectId: "vtask-d65d3",
//         storageBucket: "vtask-d65d3.appspot.com",
//         messagingSenderId: "714193708026",
//         appId: "1:714193708026:web:e5ccdd8bb99f800c083a43",
//         measurementId: "G-G2EMY2G789"
//       };
//           // Initialize Firebase
//           if(!firebase.apps.length){    
//             firebase.initializeApp(firebaseConfig);
//         }
//     dispatch(verifyRequest())
//     firebase.auth().onAuthStateChanged(user => {
//         if(user !== null){
//             dispatch(receiveLogin(user)) 
//             console.log("user already logged in")
//         }
//         else{
//             console.log("no user logged in")
//             dispatch(verifySuccess())
//         }
//     })
// }




// Redux Function
// export const testFirebaseInRedux = () => {
//     return (dispatch, getState) => {
//       firebase.auth().onAuthStateChanged(function (user) {
//         if (user) {
//           console.log("testFirebaseInRedux: logged in");
//           dispatch(isUserConnected(true));
//         } else {
//           console.log("testFirebaseInRedux: not logged in");
//           dispatch(isUserConnected(false));
//         }
//       })
//     }
//   }
  
//   export const isUserConnected = (payloadToSet) => {
//     return {
//       type: 'IS_USER_CONNECTED',
//       payload: payloadToSet
//     }
//   }
// export const usersCreate = ({email,password}) => {
//     console.log(email,password);
//     const {currentUser} = firebase.auth();
    
//     return (dispatch) => {
//         firebase.database().ref(`/users`)
//         .push({email,password})
//         .then(() => {
//             dispatch({
//                 type: USERS_CREATE
//             })
//         })
//     }
// }

// export const usersFetch = () => {
//     const {currentUser} = firebase.auth()

//     return(dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}`)
//         .on('value',snapshot => {
//             dispatch({
//                 type: USERS_FETCH_SUCCESS,
//                 payload: snapshot.val()
//             })
//         })
//     }
// }

// export const usersSave = ({userName}) => {
//     const {currentUser} = firebase.auth()

//     return(dispatch) => {
//         firebase.database().ref(`/users/${currentUser.uid}`)
//         .set({userName})
//         .then(() => {
//             dispatch({
//                 type: USERS_SAVE_SUCCESS
//             })
//         })
//     }
// }

