import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CardList from '../components/CardList';
import LoginForm from '../components/LoginForm';
import UserDetail from '../components/UserDetail';


const Stack = createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginForm}  />
            <Stack.Screen name="UsersList" component={CardList} />
            <Stack.Screen name="UsersDetail" component={UserDetail} />
        </Stack.Navigator>
    )
}

export default function StackNavigation(){
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
