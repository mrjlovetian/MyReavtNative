import React,{Component}from 'react';
import {
    View,
    Text,
    Navigator,
    StyleSheet,
}from 'react-native';

export default class BuildView extends Component{
    render(){
        return(
            <View style={{backgroundColor:'red', flex:1}}>
                <View style={{justifyContent:'center', alignSelf:'center', height:80, width:90}}>
                    <Text>楼盘列表</Text>
                </View>
                
            </View>
        )
    }
}