import React,{Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity,
}from 'react-native';

import MyNav from './MyNav';

import Message from './message';

import BuildCell from './BuildCell';

import Server from './Server';

import Util from './Util';

import BuildDetail from './BuildDetail';

export default class BuildList extends Component{

  constructor(props){
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged:(oldRow, newRow)=>oldRow!==newRow
    })

    this.state = {
      dataSource:ds.cloneWithRows(['杭州', '厦门', '房产销冠'])
    }
  }

  pushNexView(){
    var route= {
      component:Message,
    }
    this.props.navigator.push(route);
  }

  _buildDetail(){
    console.log('我是小红君');
    var com={
      component:BuildDetail,
    }
    this.props.navigator.push(com);
  }

  _renderRow(model){
    return(
      <BuildCell buildModel={model} onPress={this._buildDetail.bind(this)}/>
    )
  }

  _getData(){
    var that = this;
    Util.getUrl('http://broker.dev.apitops.com/broker-service-web/v1/building/buildingList?cityId=112&isPre=3&latitude=0&longitude=0&pageIndex=1&pageSize=20&propertyId=0&regionId=0&sellPointId=0&sortId=0',
        function(data){

          var ds = new ListView.DataSource({
            rowHasChanged:(oldRow, newRow)=>newRow!==oldRow
          })
          console.log('======================='+data.Data);
        that.setState({
          dataSource:ds.cloneWithRows(data.Data)
        })

      }, function(error){
        console.log(error);
          alert(error);
        })
  }

  componentDidMount(){
    this._getData();
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyNav title={'楼盘列表'}/>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}>
        </ListView>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  centerView:{
    backgroundColor:'yellow',
    height:69,
    width:69,
  }
});
