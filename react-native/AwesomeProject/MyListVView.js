import React, {Component, PropTypes} from 'react';
import {
	AppRegistry,
	Text,
	View,
	ListView,
	StyleSheet
} from 'react-native';

class myListView extends Component{


	constructor(props) {
	  super(props);
		var names = ['语文', '数据', '英语'];
		const ds = new ListView.DataSource({
			rowHasChanged:(oldRow, newRow) => oldRow !== newRow
		});
	  this.state = {
	  		dataSource: ds.cloneWithRows(names)
	  };
	}

	_renderRow(dataSource){
		return (
			<View>
				<Text>{dataSource}</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={{flex:1}}>
				<ListView style={styles.contanier} dataSource={this.state.dataSource} renderRow={this._renderRow}>
				</ListView>
			</View>
			);
	}
}

var styles = StyleSheet.create({
	contanier:{
		flex:1,
		backgroundColor:'#f00',
	}
});

module.exports = myListView;
