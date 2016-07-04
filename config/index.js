const base = require('./_default')

const envConfig = require(`./${base.env}`)(base)


module.exports = Object.assign({}, base, envConfig)
