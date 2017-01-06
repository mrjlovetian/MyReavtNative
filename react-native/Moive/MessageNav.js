import React,{Component} from 'react';
import {
	Navigator,
	View,
}from 'react-native';

import Message from './message';

export default class MessageNav extends Component{
	render(){

		return(<Navigator initialRoute={{name:'消息', component:Message}}
			configureScene={(route)=>{
				return Navigator.SceneConfigs.VerticalDownSwipeJump;
			}}
			renderScene={(route, navigator)=>{
				let Com = route.component;
				return <Com {...route.params} navigator={navigator} />
			}}
			 />)

	}
}