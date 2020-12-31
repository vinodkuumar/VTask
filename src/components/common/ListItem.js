import React,{Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import { CardSection } from './CardSection'

class ListItem extends Component{
    render(){
        console.log("data",this.props)
        const {email,password} = this.props.data
        return(
            <CardSection>
                <Text style={styles.userNameStyle}>
                    {email}{password}
                </Text>
            </CardSection>
        )
    }
}

const styles = StyleSheet.create({
    userNameStyle:{
        fontSize: 18,
        paddingLeft: 15
    }
})

export default ListItem;