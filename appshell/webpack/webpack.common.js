const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const tsTsxJsJsxRegex = /\.(ts|tsx|js|jsx)$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const assetsRegx =
  /\.(png|jp(e*)g|svg|woff(2)?|ttf|eot|pdf)(\?v=\d+\.\d+\.\d+)?$/;

module.exports = {
  entry: "./src/index",
  module: {
    rules: [
      {
        test: tsTsxJsJsxRegex,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: [
          {
            loader: "style-loader",
          },
          { loader: "css-loader" },
        ],
      },
      {
        test: cssModuleRegex,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportLocalsConvention: "dashesOnly",
              },
            },
          },
        ],
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          {
            loader: "style-loader",
          },
          { loader: "css-loader" },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: sassModuleRegex,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportLocalsConvention: "dashesOnly",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: assetsRegx,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".json",
      ".css",
      ".scss",
      ".sass",
      ".less",
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "App Shell",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
