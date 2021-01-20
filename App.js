import React,{Component} from 'react';    
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleWre from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase/app';
import {verfiyAuth} from './src/actions/index';
import ReduxThunk from 'redux-thunk';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';
import StackNavigation from './src/Navigators/StackNavigation';

import configureStore from './configureStore';

class App extends Component{
  componentDidMount(){

    const firebaseConfig = {
      apiKey: "AIzaSyAc8fstZ8UFELf8zsfQehEb5NogRtXtXB8",
      authDomain: "vtask-d65d3.firebaseapp.com",
      projectId: "vtask-d65d3",
      storageBucket: "vtask-d65d3.appspot.com",
      messagingSenderId: "714193708026",
      appId: "1:714193708026:web:e5ccdd8bb99f800c083a43",
      measurementId: "G-G2EMY2G789"
    };
    // Initialize Firebase
      if(!firebase.apps.length){    
        firebase.initializeApp(firebaseConfig);
    }
   }
    render() {
           //const store = configureStore();
           const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
     
    

      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
  }
    export default App;