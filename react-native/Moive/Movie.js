import React, {Component}from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView,
}from 'react-native';

import Util from './Util';

import Server from './Server';

import MovieCell from './MovieCell';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class Movie extends Component{

	constructor(props) {
	  super(props);
		var ds = new ListView.DataSource({
			rowHasChanged:(oldRow, newRow)=>oldRow!==newRow
		})
	  this.state = {
	  	show:false,
	  	dataSource:ds
	  };
	}

	getData(){
		var that = this;
		var url = Server.Host+Server.GetSubject+"?count=40&q=1";
		console.log(url);

		Util.getUrl(url, function(data){

			console.log(data.subjects);

			var ds = new ListView.DataSource({
					rowHasChanged:(oldRow, newRow)=>oldRow!==newRow
			})

			that.setState({
				show:true,
				dataSource:ds.cloneWithRows(data.subjects)
			})

		// 	that.setState({
		// 		show:true,
		// 		dataSource:ds.cloneWithRows(data.subjects)
		// 	});
		}, function(error){
			console.log('&&&&&&&&&&&&&&&&&&&&&&', error);
		});
	}

	componentDidMount(){
		this.getData();
	}

	_renderView(movie){
		console.log('进来没');
		return <MovieCell movie={movie}/>
	}



	render(){

		return(
			<View style={styles.container}>
			{
				this.state.show?
				// <View style={{backgroundColor:'green', flex:1}}></View>
				<View style={{backgroundColor:'green', flex:1}}>
					<ListView
					style={styles.ListView}
					dataSource={this.state.dataSource}
					renderRow={this._renderView}/>
				</View>
				:Util.loading
			}
			</View>
			);
	}
}

var styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
		flex:1
	},
	ListView:{
		backgroundColor:'yellow',
		flex:1
	}
})
