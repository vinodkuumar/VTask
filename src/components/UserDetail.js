// import React,{Component} from 'react';
// import {View,Text,StyleSheet,Image,FlatList,Button} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {connect} from 'react-redux';
// import {Card,CardSection} from '../components/common';
// import {usersReducer} from '../reducers/usersReducer';
// import {removeItem} from '../actions'



// class UserDetail extends Component{
//     render(){
//          return(    
//             <View style={{flex: 1}}>
//                 <Image 
//                     style={styles.profile_icon_style}
//                     source={require('../images/profile_icon.png')} />
                
//                         <Text style={styles.textingStyle}>Id: {this.props.id}</Text>
//                         <Text style={styles.textingStyle}>UserName: {this.props.email}</Text>
//                         <Text style={styles.textingStyle}>{this.props.description}</Text>
//                 <Button title="Hide me" onPress={() => console.log(this.props.removeItem(this.props.id))}/>

//              </View>
            
           
        
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return{
//         users: state.users
//     }
//  }
    

// const styles = StyleSheet.create({
//     profile_icon_style:{
//         width: 200,
//         height: 200,
//         alignSelf:'center'
//     },
//     textingStyle:{
//         fontSize: 18,
//         paddingLeft: 15,
//         fontWeight: 'bold'
//     }
// })

// export default connect(mapStateToProps,{removeItem})(UserDetail)


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {removeItem} from '../actions/index';

function userDetail(props) {
    const users = useSelector(state => state.users)
    const userId = props.id;
    const selectedUser = users.find(user => user.id === userId)
    console.log(userId)
   
   // console.log({users})
    const dispatch = useDispatch()
    console.log(dispatch(removeItem(selectedUser.id)))
    return(
        <View style={{flex: 1}}>
                <Image 
                    style={styles.profile_icon_style}
                    source={require('../images/profile_icon.png')} />
                
                        <Text style={styles.textingStyle}>Id: {selectedUser.id}</Text>
                        <Text style={styles.textingStyle}>UserName: {selectedUser.name}</Text>
                        <Text style={styles.textingStyle}>Email: {selectedUser.email}</Text>
                        <Text style={styles.textingStyle}>Description: {selectedUser.Description}</Text>
                <Button title="Hide me" onPress={() => {dispatch(removeItem(selectedUser.id))}}/>

             </View>

    )
}

const styles = StyleSheet.create({
    profile_icon_style:{
        width: 200,
        height: 200,
        alignSelf:'center'
    },
    textingStyle:{
        fontSize: 18,
        paddingLeft: 15,
        fontWeight: 'bold'
    }
})

export default userDetail;