const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const outputPath = path.resolve(__dirname,  '../dist');
module.exports = {
  entry: path.resolve(publicPath, 'main.js'),
  output: {
    path: outputPath,
    filename: '[name].[chunkhash].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
      },
    ]
  }
}