import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const VENDOR_LIBS = [
	'react',
	'redux', 
	'react-redux', 
	'react-dom',
	'redux-thunk', 
	'react-router',
]

const config = {
	entry: {
		bundle: './src/index.jsx',
		vendor: VENDOR_LIBS,
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: '/',
	},
	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"],
		extensions: ['.js', '.jsx']
  },
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/,
			},
			{
				loader: ExtractTextPlugin.extract({
					loader: ['css-loader', 'sass-loader']
				}),
				test: /\.scss$/,
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					}, 
					'image-webpack-loader',
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
	],
	devtool: 'cheap-module-inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
	},
}

export default config