import React,{Component}from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class myCell extends Component{

  render(){
    return(
      <TouchableOpacity {...this.props}>
        <View style={styles.contanier}></View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  contanier:{
    // flex:1,
    backgroundColor:'yellow',
    marginTop:5,
    height:80,
    marginBottom:5
  }
})
