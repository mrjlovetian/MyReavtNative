import React, {Component}from 'react';
import {
	Text,
	View,
}from 'react-native';

var Server = {

	Host: "https://api.douban.com",


	GetSubject: "/v2/movie/search",

	GetBook:"/v2/book/search",
}


module.exports = Server;
