import React,{Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
}from 'react-native';

export default class Navgation extends Component{

  _pop(){
    this.props.navigator.pop();
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity {...this.props}>
          <Image style={styles.image}>
          </Image>
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.titleText}>
            菜单
          </Text>
        </View>

        <TouchableOpacity {...this.props}>
        <View style={styles.rightBtn}>
          <Text>
            同意
          </Text>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flexDirection:'row',
    height:64,
  },
  image:{
    height:44,
    width:44,
    backgroundColor:'red',
    marginTop:20
  },
  title:{
    justifyContent:'center',
    alignItems:'center',
    width:200
  },
  titleText:{
    fontSize:20,
    color:'#333333'
  },
  rightBtn:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
  }
})
