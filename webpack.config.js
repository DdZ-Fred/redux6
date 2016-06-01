module.exports = {
  entry: './index.js',
  output: {
    path: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'stage-2',
          ],
        },
      },
    ],
  },
};
