import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged,
        passwordChanged,
        loginUser} from '../actions';


class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const {email, password} = this.props
        this.props.loginUser({email,password})
    }
    renderError(){
        if(this.props.error){
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }
    renderButton(){
        if(this.props.loading){
            return <Text>Loading...</Text>
        }
        return(
            <TouchableOpacity 
                    style={styles.loginBtn}
                    onPress={this.onButtonPress.bind(this)}
                    >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
        )
    }

    render(){
    return(
        <View style={styles.container}>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="email@gmail.com"
                placeholderTextColor="#000000"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
                />
                </View>
                <View style={styles.inputView}>
            <TextInput 
                style={styles.inputText}
                secureTextEntry
                placeholder="Password..."
                placeholderTextColor="#000000" 
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
                />
                </View>
                {this.renderError()}
                {this.renderButton()}
        </View>
    
    )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },
    inputView:{
        width: "80%",
        backgroundColor: "#dcdcdc",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20

    },
    inputText:{
       height: 50,
       color: "black" 
    },
    loginBtn:{
        width: "80%",
        backgroundColor: "#1e90ff",
        borderRadius: 25,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30,
        marginBottom: 10
    },
    loginText:{
        color:'white'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: 'red'
    }
})

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth
    return{
        email, password, error, loading
    }
}

export default connect(mapStateToProps, { emailChanged,passwordChanged,loginUser })(LoginForm);