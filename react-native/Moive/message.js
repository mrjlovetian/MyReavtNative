import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	ListView,
	Navigator,
	TouchableOpacity,
}from 'react-native';

import MessageCell from './messageCell'

import MessageDetail from './MessageDetail'

import Util from './Util'

import Server from './Server'

export default class Message extends Component{
	constructor(props) {
	  super(props);
	  	var massgaes = ["电影", "历史", "话剧"];
		const ds = new ListView.DataSource({
			rowHasChanged:(oldRow, newRow)=>oldRow!==newRow
		});
	  this.state = {
	  	dataSource:ds.cloneWithRows(massgaes),
	  };
	}

	printMessage(name)
	{
		console.log('我是小红君');
		const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: MessageDetail,
            })
        }
	}

	_renderRow(row){
		return(
			<MessageCell onPress={this.printMessage.bind(this)} book={row} />
			)
	}

	render(){
		return (
				<View style={styles.container}>
					<ListView style={styles.listView} dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}></ListView>
				</View>
			)
	}

	getData(){
		var that = this;
		Util.getUrl(Server.Host+Server.GetBook+'?q=aa&count=20', function(responseData){
			console.log("================================="+responseData.books);
			var ds = new ListView.DataSource({
				rowHasChanged:(oldRow, newRow)=>oldRow!==newRow
			});

			that.setState({
				dataSource:ds.cloneWithRows(responseData.books)
			})

		}, function(error){
			console.log('--------------------------------'+error);
		})
	}

componentDidMount(){
	this.getData();
}

}


var styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:20,
		backgroundColor:'white',
	},
	listView:{
		flex:1,
	},
	cell:{
		flex:1,
		height:80,
	},
	btn:{
		backgroundColor:'red',
		height:50,
		marginTop:64
	}

});
