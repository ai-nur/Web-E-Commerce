import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import "webpack-dev-server";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: ["source-map-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "src/assets/images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    hot: true,
    // inline: true,
    historyApiFallback: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};

export default config;
