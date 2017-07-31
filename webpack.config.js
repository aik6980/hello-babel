module.exports = {
    entry: __dirname + '/src/js/src/game.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'game.js',
        path: __dirname + '/public/js'
    }
};