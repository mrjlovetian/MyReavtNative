import React,{Component}from 'react';
import {
    View,
    Text,
    Navigator,
    StyleSheet,
}from 'react-native';

export default class Person extends Component{
    render(){
        return(
            <View style={{backgroundColor:'red', flex:1}}>
                <View style={{justifyContent:'center', alignSelf:'center', height:80, width:90}}>
                    <Text>个人中心页面</Text>
                </View>
                
            </View>
        )
    }
}