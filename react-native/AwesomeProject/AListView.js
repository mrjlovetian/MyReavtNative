import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity,
}from 'react-native';

import MyCell from './MyCell';

export default class AListView extends Component{

  constructor(props){
    super(props);

    var arr = ["asdas", "sdaf"];
    const ds = new ListView.DataSource({
      rowHasChanged:(oldRow, newRow) => oldRow!==newRow
    });
    this.state = {
      dataSource:ds.cloneWithRows(arr)
    }
  }

  selctCell(){

    // console.log("点击Cell的效果");
  }

  _renderRow(row){
    return(
      <MyCell onSelect={()=>{this.selctCell}}/>
    );
  }

  render(){
    return(
      <ListView style={styles.contanier} dataSource={this.state.dataSource} renderRow={this._renderRow}></ListView>
    );
  }
}

var styles = StyleSheet.create({
  cellRow:{
    height:100,
    flex:1,
    flexDirection:'row'
  },
  image:{
    width:100,
    height:80,
    margin:10,
    backgroundColor:"red"
  },
  contanier:{
    flex:1
  }
});
