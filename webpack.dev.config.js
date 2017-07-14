var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
// var WebpackDevServer = require('webpack-dev-server');

module.exports = {
	// entry :['./src/script/main.js','./src/script/a.js'],
	entry : './src/app.js',
	output :{
		filename :'js/[name]-[hash].js',
		path :path.resolve(__dirname,'dist')
	},
	devServer :{
		contentBase :path.join(__dirname ,'dist') ,
		hot :true 
	},
	module :{
		loaders: [
			{
				test :/\.js$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
				// include :path.resolve(__dirname,'src') ,
				query :{
					"presets" :["latest"]
				}
			},
			{
				test :/\.css$/,
				use: [ 'style-loader', 'css-loader?importLoaders=1','postcss-loader' ]
			},
			{
				test :/\.less$/,
				use: [ 'style-loader', 'css-loader?importLoaders=1','postcss-loader' ,'less-loader']

			},
			{
				test :/\.scss$/,
				use: [ 'style-loader', 'css-loader?importLoaders=1','postcss-loader' ,'scss-loader']

			},
			{
				test :/\.html$/,
				use :'html-loader'
			},
			{
				test :/\.(png|jpg|gif|svg)$/i,
		        use: [
			        {
			            loader: 'url-loader',
			            options: {
			            	name: 'assets/img-[sha512:hash:base64:7].[ext]',
			                limit: 10000 //图片大小限制 小于10000转成base64文件格式
			            }
			        },
			        'image-webpack-loader' //图片压缩
			    ]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new htmlWebpackPlugin({
			filename :'index.html',
			template:'index.html',
			inject:'body'
		})
	]
}