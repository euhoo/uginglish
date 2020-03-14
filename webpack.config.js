const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.s[a|c]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]',
				options: {
					name: '[name].[ext]'
				}
			},
		],
	},
	devServer: {
		contentBase: [path.resolve(__dirname, "build"), path.resolve(__dirname, "assets")],
		compress: true,
		port: 9080,
		watchContentBase: true,
		progress: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
	],
};
