const PATH = require('path');
const CLEAN_WEBPACK_PLUGIN = require('clean-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/js/src/game.js',
    plugins: [
        new CLEAN_WEBPACK_PLUGIN(['public']) 
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: PATH.resolve(__dirname, "src"),
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'game.js',
        path: __dirname + '/public/js'
    }
};