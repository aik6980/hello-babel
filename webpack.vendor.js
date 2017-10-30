const PATH = require('path');
const WEBPACK = require('webpack');

module.exports = {
    entry: {
        vendor: [ __dirname + "/src/js/libs/three.js",
        'react',
        'react-dom']
    },
    plugins: [
        new WEBPACK.DllPlugin({
            path: PATH.join(__dirname, "public/js", "[name]-manifest.json"),
            name: "[name]_[hash]",
        })
    ],
    output: {
        filename: '[name].js',
        path: __dirname + '/public/js',
        library: '[name]_[hash]'
    }
};