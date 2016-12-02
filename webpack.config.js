var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            /*filename: './src/index.html'*/  //创建文件
            template: './src/index.html'  //模板
        })
    ],
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader" //在 ".css" files中使用"style" and "css" loader
            },
            {
                test: /\.less/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".css", ".json"],   //  "" 空字符串表示带后缀的可以被解析到  .js,.jsx表示在引入后缀为js,jsx的库的时候可以不用添加后缀
    },
    devServer: {
        publicPath: "/static/",
        stats: {colors: true},
        port: 8080,
        contentBase: 'build',
        inline: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false,
               // pathRewrite: {'^/api2' : ''}

                pathRewrite:{'/api/(.*)':'$1\.json'}
            }
        }

    }



}