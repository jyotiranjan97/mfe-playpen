const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 7001,
    historyApiFallback: {
      index: "index.html",
    },
    devMiddleware: {
      headers: (req, res) => {
        if (
          (req.headers?.referer?.toLowerCase().indexOf("localhost") || -1) > 0
        ) {
          res.setHeader("Access-Control-Allow-Origin", "*");
        }
      },
    },
  },
  //   output: {
  //     filename: "[contenthash].js",
  //   },
  // optimization: { // ? Enabling this will enable HMR
  //   runtimeChunk: "single",
  // },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteOne",
      filename: "remoteOne.js",
      exposes: {
        "./RemoteOneApp": "./src/index",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
