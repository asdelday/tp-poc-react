'use strict';

const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('lodash.merge');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const NORMALIZE_CSS_PATH = path.resolve(ROOT_PATH, 'node_modules/normalize.css');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

process.env.BABEL_ENV = TARGET;

const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1',
];

const VENDOR_DEPENDENCIES = [
  'classnames',
  'history',
  'immutable',
  'jquery',
  'normalize.css',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'redux',
];

const common = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
};

if(TARGET === 'start' || !TARGET) {

  module.exports = merge(common, {
    entry: APP_PATH + '/client.js',
    output: {
      path: BUILD_PATH,
      filename: 'bundle.js',
    },
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      // parse host and port from env so this is easy to customize
      host: process.env.HOST,
      port: process.env.PORT,
    },
    module: {
      preLoaders: [
        {test: /\.jsx?$/, loader: 'eslint-loader', include: APP_PATH },
      ],
      loaders: [
        { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]' },
        { test: /\.css$/, loaders: ['style', 'css'], include: NORMALIZE_CSS_PATH },
        { test: /\.scss$/, loaders: ['style', 'css', 'postcss'], include: APP_PATH },
        { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], include: APP_PATH, exclude: '/node_modules/' },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.txt$/, loader: 'raw-loader' },
      ],
    },
    postcss: function (webpack) {
      return [
        require('postcss-import')({ addDependencyTo: webpack }),
        require('precss')(),
        require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
      ];
    },
    plugins: [
      new HtmlwebpackPlugin({ title: 'Heroes POC' }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  });

}

if ( TARGET === 'build' || TARGET === 'stats' || (/^deploy.*$/.test(TARGET)) ) {

  module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
      app: APP_PATH + '/client.js',
      vendor: VENDOR_DEPENDENCIES,
    },
    output: {
      path: BUILD_PATH,
      filename: '[name].[chunkhash].js?',
    },
    module: {
      loaders: [
        { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]' },
        { test: /\.css$/, loaders: ['style', 'css'], include: NORMALIZE_CSS_PATH },
        { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss'), include: APP_PATH },
        { test: /\.jsx?$/, loaders: ['babel'], include: APP_PATH, exclude: '/node_modules/' },
        { test: /\.json$/, loader: 'json-loader' },
        { test: /\.txt$/, loader: 'raw-loader' },
      ],
    },
    postcss: function (webpack) {
      return [
        require('postcss-import')({ addDependencyTo: webpack }),
        require('precss')(),
        require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
      ];
    },
    plugins: [
      new AssetsPlugin({filename: 'assets.json', prettyPrint: true}),
      new Clean(['build']), // clean build previous builds
      new ExtractTextPlugin('styles.[chunkhash].css'), // separate styles of app.js
      new webpack.optimize.CommonsChunkPlugin( 'vendor', '[name].[chunkhash].js' ), // separate vendor and app
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }), // more minification
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }), // minification
    ],
  });

}
