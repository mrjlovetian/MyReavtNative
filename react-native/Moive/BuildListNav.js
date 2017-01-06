import React,{Component}from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
}from 'react-native';

import BuildList from './BuildList';

export default class BuildListNav extends Component{
  render(){
    return(
      <Navigator initialRoute={{title:'楼盘', component:BuildList}}
      renderScene={(route, navigator)=>{
        let Com = route.component;
        return <Com {...this.passProps} navigator={navigator} />
      }}>
      </Navigator>
    )
  }
}
