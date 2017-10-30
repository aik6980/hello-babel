const PATH = require('path');
const WEBPACK = require('webpack');

module.exports = {
    entry: {
        game: __dirname + '/src/js/src/game.js'
    },
    plugins: [
        new WEBPACK.DllReferencePlugin({
            context: __dirname,
            manifest: require('./public/js/vendor-manifest.json')
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
        filename: '[name].js',
        path: __dirname + '/public/js'
    }
};