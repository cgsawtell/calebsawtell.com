var precss = require("precss")

exports.modifyWebpackConfig = function(config, env) {
    config.merge({
        postcss: [
          precss({})
        ]
    })

    return config
};