import React, {
    Component,
} from 'react';

import {
     AppRegistry,
     Image,
     StyleSheet,
     Text,
     View,
     ListView,
 } from 'react-native';



 var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';


 export default class DemoProject extends Component
 {
     constructor(props) {
         super(props);
         this.state = {
             dataSource: new ListView.DataSource({
                 rowHasChanged: (row1, row2) => row1 !== row2,
             }),
             loaded: false,
         };
     }

     componentDidMount(){
         this.fetchData();
     }

     fetchData() {
         fetch(REQUEST_URL)
             .then((response) => response.json())
             .then((responseData) => {
                 this.setState({
                     dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                     loaded: true,
                 });
             })
             .done();
     }

     render() {
         if (!this.state.loaded) {
             return this.renderLoadingView();
         }

         return (
             <ListView
                 dataSource={this.state.dataSource}
                 renderRow={this.renderMovie}
                 style={styles.listView}
             />
         );
     }

     renderLoadingView()
     {
         return (<View style={styles.container} >
                 <Text>Loading movies......</Text>
             </View>

         );
     }

     renderMovie(movie) {
         return (
             <View style={styles.container}>
                 <Image
                     source={{uri: movie.posters.thumbnail}}
                     style={styles.thumbnail}
                 />
                 <View style={styles.rightContainer}>
                     <Text style={styles.title}>{movie.title}</Text>
                     <Text style={styles.year}>{movie.year}</Text>
                 </View>
             </View>
         );
     }


 };


 var styles = StyleSheet.create({
     container: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',
     },
     rightContainer: {
         flex: 1,
     },
     title: {
         fontSize: 20,
         marginBottom: 8,
         textAlign: 'center',
     },
     year: {
         textAlign: 'center',
     },
     thumbnail: {
         width: 53,
         height: 81,
     },
     listView: {
         paddingTop: 20,
         backgroundColor: '#F5FCFF',
     },
 });