const path = require('path');
const HtmlPlugin=require('html-webpack-plugin');


module.exports={
    mode: "development",
    entry:{
        'index':'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,"dist"),
        filename: "[name].js"

    },
    //配置开发服务功能
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:'localhost',
        compress:true,
        port:8081
    },
    //插件
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true,//去掉属性的双引号
                // collapseWhitespace: true//折叠空白区域
            },
            hash:true,
            template:'./src/index.html'  //要打包的HTML模板
        }),
        //多路径
        // new HtmlPlugin({
        //     minify:{
        //         removeAttributeQuotes:true,
        //     },
        //     hash:true,
        //     template:'./src/index2.html' 
        // }),
    ]




}