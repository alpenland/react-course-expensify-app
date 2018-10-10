//in order to work, webpack eneds two pieces of info:
//where to start (app.js)
//and where to output the app

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
}

//module.exports is a node.js thing that allows whatever is inside
//to use the module items

//loader lets you customize behavior of webpack when it
//sees a certain file

