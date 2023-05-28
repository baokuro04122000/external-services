const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  mode: 'production',
  node: {
    __dirname: false,
    __filename: false,
  },
};