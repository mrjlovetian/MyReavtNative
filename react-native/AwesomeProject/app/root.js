import React,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TabBarIOS,
}from 'react-native';

import Nav from './index';

import FirstView from './FirstView';

import BuildView from './BuildView';

import Person from './Person';

export default class Root extends Component{

     constructor(props){
            super(props);
            this.state={
                selected:'首页'
            }
        }

    render(){
        return (
            <TabBarIOS>
                <TabBarIOS.Item title='首页' selected={this.state.selected==='首页'} onPress={()=>{
                    this.setState({
                        selected:'首页'
                    })
                }}>
                <Nav intObj={{name:'首页', component:FirstView}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item title='楼盘' selected={this.state.selected==='楼盘'} onPress={()=>{
                    this.setState({
                        selected:'楼盘'
                    })
                }}>
                <Nav intObj={{name:'楼盘', component:BuildView}}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item title='个人' selected={this.state.selected==='个人'} onPress={()=>{
                    this.setState({
                        selected:'个人'
                    })
                }}>
                <Nav intObj={{name:'个人', component:Person}}/>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}