import React,{Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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
        <ScrollView style={{backgroundColor:'red', flex:1}}></ScrollView>
      </View>
    )
  }
}
