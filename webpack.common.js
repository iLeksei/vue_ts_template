const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (env) => ({
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: "/(node_modules|bower_components)/",
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo:  [/\.vue$/]
                }
            },
            {
                test: /\.js/,
                exclude: "/(node_modules|bower_components)/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    // "style-loader"
                ]
            },
            {
                test: /\.s(c|a)ss/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                fiber: require("fibers"),
                                indentedSyntax: true,
                            }
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        // extensions: ["js", "vue"],
        modules: [
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "src"),
        ]
    },
    devtool: env.NODE_ENV === "dev" ? "source-map" : "",
    watch: env.NODE_ENV === "dev",
    devServer: {
        // contentBase: "./index.html",
        historyApiFallback: true,
        compress: true,
        // port: 8080,
        // allowedHosts: [
        //     "localhost:8082" //stub
        // ]
    }
});