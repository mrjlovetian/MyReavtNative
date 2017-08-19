import React,{Component}from 'react';
import {
    View,
    Text,
    Navigator,
    StyleSheet,
}from 'react-native';

import FirstView from './FirstView';

export default class RootNav extends Component{
    render(){
        var intObj = this.props.intObj;
        return(
            <Navigator initialRoute={{title:intObj.name, component:intObj.component}}
                renderScene={(route, navigator)=>{
                    let Com = route.component;
                    return <Com {...this.proprass} navigator={navigator} />
                }}>
            </Navigator>
        )
    }
}
