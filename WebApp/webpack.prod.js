const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()],
  },
  entry: {
    index: "./src/index.js",
    sessions_details: "./src/js/pages/session_details.js",
    auth: "./src/js/pages/auth.js",
  },
  output: {
    filename: "js/[name].[contentHash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /main\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /main\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /main\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "assets/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebPackPlugin({
      template: "./src/sessions/details.html",
      filename: "./sessions/details.html",
      chunks: ["sessions_details"],
    }),
    new HtmlWebPackPlugin({
      template: "./src/auth/login-panel.html",
      filename: "./auth/login-panel.html",
      chunks: ["auth"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contentHash].css",
      ignoreOrder: false,
    }),
    new MinifyPlugin(),
    new CleanWebpackPlugin(),
  ],
};
