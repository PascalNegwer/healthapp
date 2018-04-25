const config = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/docs'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
};

module.exports = config;