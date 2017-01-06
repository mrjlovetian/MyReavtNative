import React, {Component}from 'react';

import {
	View,
	Text,
	Dimensions,//获取屏幕宽高
	ActivityIndicator,//加载动画
}from 'react-native';

///公共类
var Util = {
	windowSize:{
		width:Dimensions.get('window').width,
		height:Dimensions.get('window').height,
	},

	getUrl(url, successBlock, failureBlock){
		console.log(url);
		fetch(url)
		.then((response)=>response.json())
		.then((responseData)=>successBlock(responseData))
		.catch((error)=>failureBlock(error));
	},

	loading:<ActivityIndicator style={{marginTop:200}}/>
}

module.exports = Util;
