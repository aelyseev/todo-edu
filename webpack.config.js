module.exports = {
	entry: './js/app.js',
	output: {
		path: './dist/',
		filename: 'app.bundle.js'
	},

	module: {
		loaders: [
			{test: /\.hbs\.js$/, loader: 'handlebars-loader'}
		]
	}
};
