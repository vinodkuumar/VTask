import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase/app';


import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';

class App extends Component{
  componentDidMount(){
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };
  if (!firebase.apps.length) {
    firebase.initializeApp({firebaseConfig});
}
  
  }
  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;