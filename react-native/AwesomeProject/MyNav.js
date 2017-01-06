import React, {Component}from 'react';
import {
  Text,
  View,
  Navigator,
  StyleSheet,
}from 'react-native';

import Message from './Message';

export default class MyNav extends Component{
  render(){
    return(
      <Navigator initialRoute={{name:'消息', component:Message}}
      configureScene={()=>
      {
        return Navigator.SceneConfigs.FloatFromRight;
      }}
      renderScene={(route, navigator)=>{
        let Com = route.component;
        return <Com {...route.params} navigator={navigator} route={route} />
      }}
      />
      )
  }
}
