const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const basicEntry = './src/index-basic.jsx'
const reduxEntry = './src/index-redux.jsx'
const ENTRY_POINT = process.env.entry === 'basic' ? basicEntry : reduxEntry

module.exports = {
  entry: ENTRY_POINT,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}
