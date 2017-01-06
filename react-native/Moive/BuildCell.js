import React,{Component}from 'react';
import{
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
}from 'react-native';

export default class BuildCell extends Component{
  render(){
    var buildModel = this.props.buildModel;
    return(
      <TouchableOpacity {...this.props}>
      <View style={styles.container} >
        <View style={styles.leftView}>
          <Image style={styles.image} source={{uri:buildModel.logoPicUrl}}></Image>
        </View>
        <View style={styles.rightView}>
          <View style={styles.nameAndDistance}>
            <Text style={styles.buildName} numberOfLines={1}>{buildModel.buildingName}</Text>
            <Text style={styles.distancce}>{buildModel.distance}</Text>
          </View>
          <Text style={styles.houseType} numberOfLines={1}>{buildModel.propertyName}</Text>
          <Text style={styles.hire}>{buildModel.latitude}</Text>
          <Text style={styles.price}>{buildModel.avgPrice}</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  container:{
    height:80,
    flexDirection:'row',
  },
  leftView:{
    width:100,
  },
  image:{
    marginLeft:10,
    marginRight:10,
    height:60,
    width:80,
    backgroundColor:'red',
  },
  rightView:{
    flex:1,
    marginRight:20,
  },
  nameAndDistance:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  buildName:{
    fontSize:16,
    color:'#333333',
  },
  distancce:{
    fontSize:11,
    color:'#999999',
  },
  houseType:{
    fontSize:13,
    color:'#0091e8',
    backgroundColor:'#e9f2f7',
    borderRadius:2,
    width:40,
  },
  hire:{
    fontSize:16,
    color:'#f64c48',
  },
  price:{
    fontSize:12,
    color:'#999999',
  }

});
