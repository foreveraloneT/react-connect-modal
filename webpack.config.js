const webpack      = require('webpack')
const path         = require('path')
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: path.join(__dirname, 'examples', 'index.js'),
  output: {
    publicPath: 'examples/static/',
    path: path.join(__dirname, 'examples', 'static'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      "react-connect-modal": path.resolve(__dirname, "src")
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[local]___[hash:base64:5]'
            },
          },
          {
            loader: 'sass-loader',
            query: {
                outputStyle: 'expanded',
                sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer]
              }
            },
          }
        ]
      },
    ],
  },
  devServer: {
    hot: false,
    inline: true,
    historyApiFallback: true,
  }
}