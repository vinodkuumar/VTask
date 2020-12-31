    import React,{Component} from 'react';
    import {Provider} from 'react-redux';
    import {createStore, applyMiddleware} from 'redux';
    import reducers from './src/reducers';
    import firebase from 'firebase/app';


    import ReduxThunk from 'redux-thunk';
    import LoginForm from './src/components/LoginForm';
    import Router from './src/Router';
import StackNavigation from './src/Navigators/StackNavigation';

    class App extends Component{
      state = { loggedIn: null };

      componentDidMount(){
        // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    //   const firebaseConfig = {
    //     apiKey: process.env.REACT_APP_API_KEY,
    //     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    //     projectId: process.env.REACT_APP_PROJECT_ID,
    //     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    //     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    //     appId: process.env.REACT_APP_APP_ID,
    //     measurementId: process.env.REACT_APP_MEASUREMENT_ID
    //   };
    //   if (!firebase.apps.length) {
    //     firebase.initializeApp({firebaseConfig});
    // }
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
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
  }
    export default App;