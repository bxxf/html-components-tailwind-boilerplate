const webpack = require('webpack');
const paths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputPath,
    chunkFilename: '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    open: true,
    clientLogLevel: 'silent',
    contentBase: paths.outputPath,
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 8080,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'source-map',
};
