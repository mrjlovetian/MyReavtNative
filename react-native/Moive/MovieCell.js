import React, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';





export default class movieCell extends Component{
	render(){
		var movie = this.props.movie;
		return (
			<View style={styles.container}>
				<Image style={styles.iamge} source={{uri:movie.images.small}}>{console.log(movie.images)}</Image>
				<View style={styles.rightView}>
					<Text>{movie.title}</Text>
					<Text style={styles.text}>作者:{movie.casts[0].name}</Text>
					<Text style={styles.text}>演员:{movie.genres[0]}</Text>
					<Text style={styles.text}>时间:{movie.year}年</Text>
				</View>
			</View>
			)
	}
}

var styles = StyleSheet.create({
	container:{
		flex:1,
		flexDirection:'row',
		height:75
	},
	iamge:{
		margin:10,
		width:80,
	},
	rightView:{
		flex:1,
	},
	text:{
		fontSize:15,
		color:'#666666',
	}
})