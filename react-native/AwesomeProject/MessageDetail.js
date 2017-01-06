import React,{Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
}from 'react-native';

import Nav from './Navigation';

export default class MessageDetail extends Component{

  _pop(){
    this.props.navigator.pop();
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Nav onPress={this._pop.bind(this)}/>

        <View style={{backgroundColor:'orange', flex:1}}>
        </View>
      </View>

    )
  }
}
