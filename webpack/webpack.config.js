const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssPlugin = new MiniCSSExtractPlugin({
    filename: "styles[contenthash].css"
});
const Terser = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output: {
        filename: 'bundle[contenthash].js',
        path: path.resolve(__dirname, "./dist")
    },
    mode:'development',
    devServer:{
        static:{
            directory: path.resolve(__dirname, "./dist")
        },
        port: 3090
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use:[MiniCSSExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins:[
        CssPlugin,
        new Terser(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}