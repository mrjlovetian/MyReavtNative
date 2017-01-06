import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';

export default class messageCell extends Component{
	render(){
		var book = this.props.book;
		return (
			<TouchableOpacity {...this.props}>
				<View style={styles.container}>
					<View style={styles.leftView}>
						<Image source={{uri:book.image}} style={{flex:1}}></Image>
						{console.log(book)}
					</View>

					<View style={styles.rightView}>
						<View style={styles.rightTopView}>
							<Text style={styles.userName}>{book.author}</Text>
							<Text style={styles.userTag}>卖</Text>
							<Text style={styles.time}>12-13</Text>
						</View>
						<View style={styles.rightBottomView}>
							<Text style={styles.message}>{book.publisher}</Text>
						</View>
						<View style={styles.line}>
						</View>
					</View>

				</View>
			</TouchableOpacity>
			)
	}
}

var styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		height:75
	},
	leftView:{
		height:75,
		width:75
	},
	rightView:{
		flex:1,
	},
	rightTopView:{
		flex:1,
		height:75,
		flexDirection:'row',
		alignItems:'flex-end',
	},
	rightBottomView:{
		flex:1,
	},
	userName:{
		marginTop:20,
		height:16,
		fontSize:16,
		color:'#333333'
	},
	userTag:{
		marginTop:20,
		marginLeft:8,
		height:16,
		padding:2,
		fontSize:12,
		color:'#333333',
		backgroundColor:'red',
		borderRadius:5.0
	},
	time:{
		marginTop:20,
		marginLeft:100,
		fontSize:12,
		color:'#999999'
	},
	message:{
		marginTop:10,
		fontSize:14,
		color:'#999999'
	},
	line:{
		height:0.5,
		backgroundColor:'#d9d9d9'
	}
})
