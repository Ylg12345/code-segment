
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExTractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

module.exports = {
  mode: 'none',
  entry: {
    home: './src/home/index.js',
    about: './src/about/index.js'
  },
  output: {
    filename: '[name]-[contenthash].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader', //将样式通过style标签注入

          MiniCssExTractPlugin.loader, //通过link标签引入 建议css文件超过150kb使用
          'css-loader',
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExTractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: path.resolve(__dirname, 'src/home/index.html'),
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      template: path.resolve(__dirname, 'src/about/index.html'),
      filename: 'about.html',
      chunks: ['about']
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    devMiddleware: {
      writeToDisk: true,
    },
  }
}