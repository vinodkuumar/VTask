// import React,{Component} from 'react';
// import {FlatList,View,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import {connect} from 'react-redux';
// import { Card,CardSection } from './common';


// class CardList extends Component{
    
//     renderItem(user){
        
//         return(
//             <TouchableOpacity onPress={() => Actions.UsersDetail({id: user.item.id})}>
//             <Card>
//                 <CardSection>
//                 <Image 
//                     style={styles.profile_icon_style}
//                     source={require('../images/profile_icon.png')} />
//                     <Text style={styles.nameStyle}>{user.item.name}</Text>
//                 </CardSection>
//             </Card>
//             </TouchableOpacity>
//         )
//     }

//     loadServices(){
//         return(
//             <View style={{flex: 1}}>
//             <FlatList 
//                 data={this.props.users}
//                 keyExtractor = {users => users.id.toString()}
//                 renderItem = {this.renderItem}
//                 />
//         </View>
//         )
//     }
    
//     render(){
        
//         return(
//             this.loadServices()
//         )  
//     }
// }

// const mapStateToProps = (state) => {
//    return{
//        users: state.users
//    }
// }

// const styles = StyleSheet.create({
//     profile_icon_style:{
//         width: 50,
//         height: 50,
//     },
//     nameStyle:{
//         paddingLeft: 15,
//         alignSelf: 'center'
//     }
// })


// export default connect(mapStateToProps)(CardList);


import React,{useState,useEffect}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {useSelector, useDispatch } from 'react-redux';
import { Card,CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import {removeItem} from '../actions/index';



const CardList = props => {
    
    const users = useSelector(state => state.users)
    const [availableUsers,setAvailableUsers] = useState([users]);
    console.log("@ac", availableUsers)
    const fusers = useSelector(state => state.filteredUsers)
    const [fc,setFc] = useState([fusers]) 
    console.log("@fc", fc)
    const dispatch = useDispatch();
    const userId = props.id;
    console.log("@selected user", userId);
    const updatedUsers = users.filter(item => item.id !== userId)
   
    
    useEffect(() => {
          dispatch(removeItem(userId))
          setAvailableUsers(updatedUsers)
    },[])
    
    const renderUser = itemData => {
        return(
        <TouchableOpacity onPress={() => Actions.UsersDetail({id: itemData.item.id})
        }>
            <Card>
                <CardSection>
                <Image 
                    style={styles.profile_icon_style}
                    source={require('../images/profile_icon.png')} />
                    <Text style={styles.nameStyle}>{itemData.item.name}</Text>
                </CardSection>
            </Card>
            </TouchableOpacity>
        )
    }
    return(
        <View>
            <FlatList 
                data = {availableUsers}
                keyExtractor = {(item,index) => item.id}
                renderItem={renderUser}/>
        </View>
    )

}

const styles = StyleSheet.create({
    profile_icon_style:{
        width: 50,
        height: 50,
    },
    nameStyle:{
        paddingLeft: 15,
        alignSelf: 'center'
    }
})

export default CardList;