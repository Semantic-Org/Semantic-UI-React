import base from './_default'

const envConfig = require(`./${base.env}`).default(base)

export default { ...base, ...envConfig }
