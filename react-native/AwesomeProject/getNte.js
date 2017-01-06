import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class getNet extends Component{

  constructor(props){
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged(oldRow, newRow)=>oldRow!==newRow;
    })
    this.state = {
      dataSource:ds;
    }
  }

  clickMethod(){
    console.log("我是小红君");
    fetch("http://broker.dev.apitops.com/broker-service-web/v1/building/buildingList?cityId=112&regionId=0&propertyId=0&sortId=0&sellPointId=0&pageIndex=1&pageSize=10")
    .then((response)=>{response.json()})
    .then((reaponseData)=>{
      console.log(reaponseData);
      console.log("a");
    })
    .catch((error)=>{
      console.log(error);
      console.log("B");
    })
  }

  _renderRow(){
    return (<View></View>);
  }

  render(){
    return(
      <View style={styles.contanier}>
        <ListView dataSource={this.dataSource} renderRow={this._renderRow}></ListView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  contanier:{
    backgroundColor:'red',
    flex:1,
    justifyContent:'center',
  },
  btn:{
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center',
    height:40
  }
});
