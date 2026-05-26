const path = require("node:path");
const HTMLWebpackPlugins = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = () => ({
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: '[name].[contenthash].js',
        clean: true,
        publicPath: "",
        assetModuleFilename: "assets/[hash].[ext]",
    },
    devServer: {
        static: path.resolve(__dirname, "./public"),
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|JPG|gif|woff(2)?|eot|ttf|otf|mp4)$/,
                type: "asset/resource"
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "url-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: path.resolve(__dirname, "public/index.html"),
            //favicon: path.resolve(__dirname, "public/favicon.svg")
        }),
        new Dotenv({
            path: "./.env"
        })
    ],
    infrastructureLogging: {
        level: "warn"
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
})
