// configuracion base de webpack

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.mjs', '.js', '.svelte']
    },
    module: {
        rules: [
            {
                test: /\.js?$/, // expresion regular para detetectar para los archivos .js
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svelte$/, // expReg para detetectar para los archivos .svelte
                exclude: /node_module/,
                use: {
                    loader: 'svelte-loader'
                }
            }
        ]
    },
    plugins: [ // plugin para trabajar con HTML
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename:'./index.html'
        })

    ]
}

