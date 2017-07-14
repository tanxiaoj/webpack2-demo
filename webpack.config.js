const path = require('path');

module.exports = {
	entry :['./src/script/main.js','./src/script/a.js'],
	output :{
		filename :'bundle.js',
		path :path.resolve(__dirname,'dist'),
		publicPath :'/assets/'
	}
}