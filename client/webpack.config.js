const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: "ts-loader"
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({ 
            hash: true,
            filename: "./index.html",
            template: "./src/index.html" 
        })
    ]
};