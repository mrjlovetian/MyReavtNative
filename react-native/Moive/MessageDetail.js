import React, {Component} from 'react';
import {
	View,
	StyleSheet,
}from 'react-native';

export default class MessageDetail extends Component{
	render(){
		return(
				<View style={styles.container}></View>
			)
	}
}

var styles = StyleSheet.create({
	container:{
		backgroundColor:'red',
		flex:1
	}
})