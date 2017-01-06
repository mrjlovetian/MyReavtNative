import React,{Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
}from 'react-native';

export default class MyNav extends Component{
  render(){
    var title = this.props.title;
    return (
      <View style={styles.container}>
        <TouchableOpacity {...this.props}>
        <View style={styles.leftView}>
        </View>
        </TouchableOpacity>

        <View style={styles.centerView}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.rightView}>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container:{
    height:64,
    backgroundColor:'white',
    flexDirection:'row',
  },
  leftView:{
    width:44,
    marginTop:20,
    height:44,
    backgroundColor:'green',
  },
  centerView:{
    marginTop:20,
    height:44,
    backgroundColor:'pink',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  rightView:{
    width:44,
    marginTop:20,
    height:44,
    backgroundColor:'yellow',
  },
  title:{
    fontSize:17,
    color:'#333333',
  }
});
