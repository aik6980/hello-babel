const PATH = require('path');
const CLEAN_WEBPACK_PLUGIN = require('clean-webpack-plugin');
const COPY_WEBPACK_PLUGIN = require('copy-webpack-plugin');
const WEBPACK = require('webpack');

module.exports = {
    entry: {
        vendor: [ __dirname + "/src/js/libs/three.js",
        'react',
        'react-dom'], 
        game: __dirname + '/src/js/src/game.js',
    },
    plugins: [
        new CLEAN_WEBPACK_PLUGIN(['public']),
        new COPY_WEBPACK_PLUGIN([
            { context: 'src/html', from : '*' , to: __dirname + '/public'},
            { context: 'src/js/shaders', from : '**/*' , to: __dirname + '/public/js/shaders'}
        ]),
        new WEBPACK.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: PATH.resolve(__dirname, "src/js/src"),
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'game.js',
        path: __dirname + '/public/js'
    }
};