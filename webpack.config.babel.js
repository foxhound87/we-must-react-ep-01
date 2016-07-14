import path from 'path';

const Dir = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
};

const Config = {
  entry: path.join(Dir.src, 'client.jsx'),
  output: {
    path: Dir.build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
};

export default Config;
