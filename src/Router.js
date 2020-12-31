import React from 'react';
import {Scene,Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CardList from './components/CardList';
import UserDetail from './components/UserDetail';

const RouterComponent = () => {
    return(
        <Router >
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                <Scene key="login"
                    component={LoginForm}
                    title="Please Login" 
                    initial />
                 </Scene>
            <Scene key="main">
                <Scene key="Users"
                    component={CardList}
                    title="Users" /> 
                <Scene key="UsersDetail"
                        component={UserDetail}
                        title="UsersDetails"/>
            </Scene>
            </Scene>
        </Router>
    )
}

export default RouterComponent;

