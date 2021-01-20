import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser} from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
// constructor(props){
//   super(props)
// }
// componentDidMount(){
//   const firebaseConfig = {
//     apiKey: "AIzaSyAc8fstZ8UFELf8zsfQehEb5NogRtXtXB8",
//     authDomain: "vtask-d65d3.firebaseapp.com",
//     projectId: "vtask-d65d3",
//     storageBucket: "vtask-d65d3.appspot.com",
//     messagingSenderId: "714193708026",
//     appId: "1:714193708026:web:e5ccdd8bb99f800c083a43",
//     measurementId: "G-G2EMY2G789"
//   };
//       // Initialize Firebase
//       if(!firebase.apps.length){    
//         firebase.initializeApp(firebaseConfig);
//     }
//   firebase.auth().onAuthStateChanged(user => {
//     if(!user){
//       Actions.root();
//       console.log("no user logged in")
//     }else{
//       console.log("user is signed in")
      
//     }
//   })
// }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
    // this.props.usersCreate({email,password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" color='blue'/>;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, isVerifying} = auth;
  return {
    email,
    password,
    error,
    loading,
    isVerifying
  };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);


