module.exports={
    entry:'./src/index.js',
    output:{
        path:'./build',
        filename:'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devServer: {
        publicPath: "/static/",
        stats: { colors: true },
        port: 8080,
        contentBase: 'build',
        inline: true
    }

}