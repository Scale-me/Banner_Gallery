const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './client/components/BannerGallery.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    library: 'BannerGallery',
  },
  module: {
    rules: [
      {
        test: /(\.m?js$|\.m?jsx$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.otf$/,
        use: {
          loader: 'url-loader',
        },
      },
    ]
  },
  plugins: [new UglifyJsPlugin()]
};