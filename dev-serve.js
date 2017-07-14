const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.dev.config.js");

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
	hot :true ,
	stats: {
		colors: true
	}
});

server.listen(8081, "127.0.0.1", function() {
	console.log("Starting server on http://localhost:8080");
});