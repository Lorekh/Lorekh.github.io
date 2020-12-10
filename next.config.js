const withFonts = require("next-fonts")

module.exports = withFonts({
    webpack(config, options) {
        config.node = {
            fs: "empty",
        };
        config.module.rules.push({
            test: /\.(png|svg)$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "url-loader?limit=100000",
                },
                {
                    loader: "file-loader",
                },
            ],
        });
        return config;
    },
});