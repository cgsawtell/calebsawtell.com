module.exports = function(config, env) {
  var is_static = env === 'static'
  var is_develop = env === 'develop'
  var is_production = env === 'production'

  config.merge({
    postcss: [
      require('lost')
    ]
  })
  console.log("I'm configuing");

  return config
}