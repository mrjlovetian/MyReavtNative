import React, {Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
  TabBarIOS
}from 'react-native';

import MyNav from './MyNav';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      selected:'消息'
    }
  }

  render(){
    return(
      <TabBarIOS>
        <TabBarIOS.Item title="消息" selected={this.state.selected==='消息'} onPress={()=>{
          this.setState({
            selected:'消息'
          })
        }}>
          <View style={{backgroundColor:'yellow', flex:1}}></View>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="图片" selected={this.state.selected==='图片'} onPress={()=>{
          this.setState({
            selected:'图片'
          })
        }}>
        <MyNav/>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
