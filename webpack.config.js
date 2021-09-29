const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    // usedExports: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  externals: {
    'react': 'React',
  }
}
