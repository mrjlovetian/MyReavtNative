import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
}from 'react-native';

var myscrollview = React.createClass({

	


	render: function () {
		return (
			<View style={{flex:1}}>
				<ScrollView style={styles.myscrollview}>
					<View style={styles.upView}></View>
					<View style={styles.downView}></View>
					<View style={styles.upView}></View>
					<View style={styles.downView}></View>
				</ScrollView>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	contaier:{
		flex:1,
	},
	topNav:{
		marginTop:25,
	},
	myscrollview:{
		backgroundColor:'#fff',
	},
	upView:{
		margin:20,
		backgroundColor:'#f00',
		height:200,
	},
	downView:{
		margin:20,
		backgroundColor:'#0f0',
		height:100
	}

})

module.exports = myscrollview;
