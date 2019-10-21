const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: '/public/assets/js',
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(bower_components|node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.PUNKAPI_ROOT_ENDPOINT': JSON.stringify(
        'https://api.punkapi.com/v2/'
      ),
    }),
  ],
};
