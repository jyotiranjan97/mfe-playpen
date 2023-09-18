const { merge } = require("webpack-merge");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 7000,
    historyApiFallback: true,
    hot: true,
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        remoteOne: "remoteOne@http://localhost:7001/remoteOne.js",
        remoteTwo: "remoteTwo@http://localhost:7002/remoteTwo.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
