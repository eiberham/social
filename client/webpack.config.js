const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"]
    },
    module: {
        rules: [
            {
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
				test: /\.(s*)css$/,
				use:  [  
					'style-loader', 
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'sass-loader'
				]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        host: '127.0.0.1',
        port: 80,
        compress: true,
        proxy: {
            '/api': {
                target: 'https://localhost:3000',
                secure: false,
                changeOrigin: true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            hash: true,
            filename: "index.html",
            template: "./src/index.html" 
        }),
        new MiniCssExtractPlugin({
			filename: 'styles.css',
        })
    ]
};