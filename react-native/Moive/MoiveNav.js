import React, {Component} from 'react';
import {
	View,
	Text,
	Navigator,
} from 'react-native';

import Moive from './Movie';

export default class MoiveNav extends Component{
	render(){
		return (
			<Navigator 
			initialRoute={{name:'diany', component:Moive}}
			configureScene={(route)=>
				{
					return Navigator.SceneConfigs.VerticalDownSwipeJump;
				}}
			renderScene={(route, navigtor)=>{
				let Component = route.component;
				return <Component {...route.parmas} navigtor={navigtor}/>
			}}
			/>
			)
	}
}
