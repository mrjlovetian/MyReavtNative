import React,{Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ListView,
}from 'react-native';

import Nav from './Navigation';

import MessageDetail from './MessageDetail';

import MessageCell from './MyCell';

export default class Message extends Component{

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged:(oldRow, newRow)=>oldRow!==newRow
    });
    this.state={
      dataSource:ds.cloneWithRows(['abc', 'ABC'])
    }

  }

  _pushNext(){

    var messageRoute={
      component:MessageDetail,
      params:{
        name:'小江江'
      }
    }
    this.props.navigator.push(messageRoute)
    console.log('小江江');

  }

  _renderRow(row, sectionID, rowID){
    return(
      <MessageCell onPress={this._pushNext.bind(this)}/>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <Nav onPress={this._pushNext.bind(this)}/>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}></ListView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    flex:1
  },
  cell:{
    height:90,
    flex:1
  },
  text:{
    fontSize:18,
    color:'green'
  }
})
