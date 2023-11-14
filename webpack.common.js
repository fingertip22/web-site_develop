const path = require('path');
const glob = require('glob');
const entries = {};
const TerserPlugin = require("terser-webpack-plugin");
const EsLintPlugin = require('eslint-webpack-plugin');

const tsSrc = './src/ts';
glob.sync('**/*.ts', {
  ignore: '**/_*.ts',
  cwd: tsSrc,
})
.forEach((jsFileName) => {
  const key = jsFileName.replace(/\.ts$/, '');
  entries[key] = path.resolve(tsSrc, jsFileName);
});

module.exports = {
  entry: entries,
  output: {
    path: path.join(__dirname, './dist/assets/js'),
    filename: '[name].js',
    sourceMapFilename: '../../../maps/js/[name].map'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          { loader: 'babel-loader', },
          { loader: 'ts-loader', }
        ],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  target: "web",
  resolve: {
    extensions: [
      '.js', '.ts', '.tsx',
    ],
  },
  plugins: [
    new EsLintPlugin({
      extensions: ['.ts'],
      exclude: 'node_modules',
    }),
  ],
};
