const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  output: {
    path:path.join(__dirname, '/dist'),
    filename:'[name].[contenthash].js'
  },
  // devServer:{
  //   port:3333,
  //   hot:true
  // },
  watch:true,
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test:/\.s?css$/,
        use:[
          MiniCssExtractPlugin.loader, 
          'css-loader',
        ]
      },
      {
        test:/\.(png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              encoding: 'utf8',
            },
          },
        ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Tasty Burger',
      template:'./public/index.html',
      favicon:'./public/favicon.ico'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}