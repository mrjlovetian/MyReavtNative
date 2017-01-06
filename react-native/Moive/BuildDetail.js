import React,{Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
}from 'react-native';

import MyNav from './MyNav';

export default class BuildDetail extends Component{

  _pop(){
    this.props.navigator.pop();
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyNav onPress={this._pop.bind(this)}/>
        <View style={{backgroundColor:'red', flex:1}}></View>
      </View>
    )
  }
}
