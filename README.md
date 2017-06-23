# MyReavtNativ用来学习reactnative的代码资源库
react-native bundle --entry-file index.iOS.js --bundle-output./index.ios.jsbundle --platform ios --assets-dest ./ios --dev false
重点关注几个选项：
--entry-file：这个是你要打包的跟文件，通常是index.ios.js,注意路径不要错了，
--bundle-output：这个是你要将打包的文件放到哪里，打包的文件起什么名字如：./index.ios.jsbundle
即放入当前目录，名字为index.ios.jsbundle
--platform ： 平台设置不多说
--assets-dest:这个是你的资源打包到什么地方，通常是图片资源，文件资源什么的：如./ios
即将资源打包到ios目录下。
