const path = require("node:path");
const HTMLWebpackPlugins = require("html-webpack-plugin");

const assetPattern = "assets/[contenthash][ext]";

const babelRule = {
    test: /\.jsx?$/,
    use: "babel-loader",
    exclude: /node_modules/,
};

const svgRule = {
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
};

function clientConfig() {
    return {
        entry: path.resolve(__dirname, "./src/index.js"),
        output: {
            path: path.resolve(__dirname, "./static"),
            filename: "[name].[contenthash].js",
            clean: true,
            publicPath: "/",
            assetModuleFilename: assetPattern,
        },
        devServer: {
            static: path.resolve(__dirname, "./public"),
            port: 3000,
            open: true,
            hot: true,
            historyApiFallback: true,
            proxy: [
                {
                    context: ["/api", "/images"],
                    target: "http://localhost:2026",
                },
            ],
        },
        mode: "development",
        module: {
            rules: [
                babelRule,
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|jp(e)?g|gif|woff(2)?|eot|ttf|otf|mp4)$/i,
                    type: "asset/resource",
                },
                svgRule,
            ],
        },
        resolve: {
            extensions: [".js", ".jsx", ".json"],
        },
        plugins: [
            new HTMLWebpackPlugins({
                template: path.resolve(__dirname, "public/index.html"),
                favicon: path.resolve(__dirname, "public/favicon.svg"),
            }),
        ],
        infrastructureLogging: {
            level: "warn",
        },
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                    },
                },
            },
        },
    };
}

function serverConfig() {
    return {
        entry: path.resolve(__dirname, "./src/entry-server.jsx"),
        target: "node",
        output: {
            path: path.resolve(__dirname, "./ssr"),
            filename: "server.js",
            publicPath: "/",
            assetModuleFilename: assetPattern,
            library: { type: "commonjs2" },
            clean: true,
        },
        mode: "production",
        module: {
            rules: [
                babelRule,
                {
                    test: /\.css$/,
                    use: ["css-loader"],
                },
                {
                    test: /\.(png|jp(e)?g|gif|woff(2)?|eot|ttf|otf|mp4)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: assetPattern,
                        emit: false,
                    },
                },
                svgRule,
            ],
        },
        resolve: {
            extensions: [".js", ".jsx", ".json"],
        },
        externalsPresets: { node: true },
        optimization: {
            // Terser breaks a render path in this bundle (`images` of undefined).
            minimize: false,
            splitChunks: false,
            runtimeChunk: false,
        },
        infrastructureLogging: {
            level: "warn",
        },
        performance: { hints: false },
    };
}

module.exports = (env = {}) => (env.ssr ? serverConfig() : clientConfig());
