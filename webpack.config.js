module.exports = {
    entry: "./app/index.js",
    output: {
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
                    {exclude: "node_modules", loader: "babel-loader", test: /\.jsx?$/, query: {presets: ["react", "es2015"]}}
        ]
    }
}