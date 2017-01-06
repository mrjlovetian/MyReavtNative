import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TabBarIOS,
} from 'react-native';

import Message from './MessageNav';

import MoiveNav from './MoiveNav';

import BuildList from './BuildListNav';

export default class app extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	selected:'消息',
	  };
	}

	render(){
		return (
			<TabBarIOS>
				<TabBarIOS.Item title='消息' selected={this.state.selected==='消息'}
				onPress={()=>{
					this.setState({
						selected:'消息',
					})
				}
				}>
				<Message/>
				</TabBarIOS.Item>

				<TabBarIOS.Item title='电影' selected={this.state.selected==='电影'}
				onPress={()=>{
					this.setState({
						selected:'电影',
					})
				}
				}>
					<MoiveNav/>
				</TabBarIOS.Item>
				<TabBarIOS.Item title='楼盘' selected={this.state.selected === '楼盘'} onPress={()=>{
					this.setState({
						selected:'楼盘'
					})
				}}>
					<BuildList />
				</TabBarIOS.Item>
			</TabBarIOS>
			)
	}
}

var styles = StyleSheet.create({
	viewA:{
		flex:1,
		backgroundColor:'red'
	},
	viewB:{
		flex:1,
		backgroundColor:'yellow',
	}
})
