module.exports = {
  entry: __dirname + '/client/src/app.js',
  output: {
    path: __dirname + '/client/www',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};