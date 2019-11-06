'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
var glob = require('glob');
var entries = getEntry(['./src/module/*.js', './src/module/**/*.js']);
const TransformModulesPlugin = require('webpack-transform-modules-plugin')
const PostCompilePlugin = require('webpack-post-compile-plugin')
const vuxLoader = require('vux-loader')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

// 是否使用ESlint
const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
})


const webpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry: entries,
    output: {
        path: config.build.assetsRoot,
        filename: process.env.NODE_ENV === 'production' ? '[name].[chunkhash].js' : '[name].[hash].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'],
        alias: {
            // 定义全局引入路径标识符
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            '#': resolve('src/components'),
            '^': resolve('src/module'),
            '%': resolve('src/common'),
            'static': path.resolve(__dirname, '../static')
        }
    },
    externals: {

        /* "lodash": {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_' // 指向全局变量
        }, */
        /* vant: {
            commonjs: 'vant',
            amd: 'vant',
            root: 'vant' // 指向全局变量
        } */

    },
    module: {
        rules: [
            // 是否启用ESlint
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                    //publicPath: '../'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    plugins: [
        new PostCompilePlugin(),
        new TransformModulesPlugin(),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: process.env.NODE_ENV === 'production' ? [] : ['static/js/WebViewJavascriptBridge.js'],
            append: false, //之后添加
            hash: true
        })
    ]
}

module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui']
})

// 获取文件地址
function getEntry(globPath) {
    var entries = {},
        basename, tmp, pathname;
    if (typeof(globPath) != "object") {
        globPath = [globPath]
    }
    globPath.forEach((itemPath) => {
        glob.sync(itemPath).forEach(function(entry) {
            basename = path.basename(entry, path.extname(entry));
            if (entry.split('/').length > 4) {
                tmp = entry.split('/').splice(-3);
                pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
                entries[pathname] = entry;
            } else {
                entries[basename] = entry;
            }
        });
    });
    return entries;
}