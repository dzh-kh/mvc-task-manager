const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDevelopment = process.env.mode === "development";
const isProduction = !isDevelopment;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProduction) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

const filename = (ext) =>
  isDevelopment ? `[name].${ext}` : `[name].[hash].${ext}`;

const babelOptions = (preset) => {
  const options = {
    presets: ["@babel/preset-env"],
  };

  if (preset) {
    options.presets.push(preset);
  }

  return options;
};

const jsLoaders = () => {
  return [
    {
      loader: "babel-loader",
      options: babelOptions(),
    },
  ];
};

const paths = {
  output: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.js"),
  html: path.resolve(__dirname, "public", "index.html"),
  public: path.resolve(__dirname, "public"),
  src: path.resolve(__dirname, "src"),
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: paths.html,
      minify: {
        collapseWhitespace: isProduction,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ];

  if (isProduction) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

module.exports = {
  context: paths.src,
  mode: "development",
  entry: {
    main: [paths.entry],
  },
  output: {
    filename: filename("js"),
    path: paths.build,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".png"],
    alias: {
      "@models": path.resolve(__dirname, "src/models"),
      "@": paths.src,
    },
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDevelopment,
    historyApiFallback: true,
  },
  devtool: isDevelopment ? false : "source-map",
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  },
};
